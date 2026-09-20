import http from 'http';
import https from 'https';
import path from 'path';
import fs from 'fs';

// Load .env
const envPath = path.join(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf8');
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
      const [k, ...v] = trimmed.split('=');
      const key = k.trim();
      const val = v.join('=').trim().replace(/^["']|["']$/g, '');
      if (key && !process.env[key]) {
        process.env[key] = val;
      }
    }
  }
}

const targetModel = process.argv[2] || 'chatgpt-web/gpt-5.6-sol-high';
const apiProvider = (process.env.API_PROVIDER || 'omniroute').toLowerCase();

let baseUrl = process.env.OMNIROUTE_BASE_URL || 'http://localhost:20128/v1';
let apiKey = process.env.OMNIROUTE_API_KEY || 'omniroute-default-key';

if (apiProvider === 'openrouter') {
  baseUrl = 'https://openrouter.ai/api/v1';
  apiKey = process.env.OPENROUTER_API_KEY || '';
}

const endpoint = `${baseUrl.replace(/\/+$/, '')}/chat/completions`;
console.log(`\n📡 Testing Model Endpoint...`);
console.log(`   Provider: ${apiProvider}`);
console.log(`   Model ID: ${targetModel}`);
console.log(`   Endpoint: ${endpoint}\n`);

const payload = JSON.stringify({
  model: targetModel,
  messages: [{ role: 'user', content: 'Ping: Respond with "STATUS_OK" if online.' }],
  max_tokens: 50,
  temperature: 0.1
});

const urlObj = new URL(endpoint);
const isHttps = urlObj.protocol === 'https:';
const transport = isHttps ? https : http;

const options = {
  hostname: urlObj.hostname,
  port: urlObj.port || (isHttps ? 443 : 80),
  path: urlObj.pathname + urlObj.search,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
    'Content-Length': Buffer.byteLength(payload)
  }
};

const startTime = Date.now();

const req = transport.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => { body += chunk; });
  res.on('end', () => {
    const latency = Date.now() - startTime;
    console.log(`📥 Response Received (${latency} ms):`);
    console.log(`   HTTP Status: ${res.statusCode} ${res.statusMessage}`);
    
    try {
      const json = JSON.parse(body);
      if (res.statusCode === 200) {
        console.log(`\n✅ MODEL ACCEPTS REQUEST!`);
        console.log(`   Output: ${json.choices?.[0]?.message?.content || JSON.stringify(json)}`);
      } else {
        console.log(`\n⚠️ GATEWAY / MODEL ERROR (${res.statusCode}):`);
        console.log(`   Error Details:`, JSON.stringify(json, null, 2));
      }
    } catch {
      console.log(`   Raw Output: ${body.slice(0, 300)}`);
    }
  });
});

req.on('error', (err) => {
  console.error(`\n❌ Network Connection Error:`, err.message);
});

req.write(payload);
req.end();
