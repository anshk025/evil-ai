# Gates: Ink Multi-Pane Terminal UI

OWNS: src/ui/**, src/evil.ts, package.json, tsconfig.json, .planning/**

Scope: Multi-pane Ink TUI dashboard integration and build verification

- [x] G1: TypeScript build compiles cleanly with zero errors
  CHECK: npm run build
  EXPECT: > evil-ai-cli@1.0.0 build
  EVIDENCE: exit=0; shell=C:\windows\system32\cmd.exe; cwd=C:\Users\Ansh\OneDrive\Desktop\evil-ai; path=85ff3c42ef83/94 entries; EXPECT=matched; output-sha256=86fd54376a102df27d3b47419890111f1983a7ca5bd7f995c15b5bba4285d5c4; output-bytes=34

- [x] G2: Built App component exports reactive React TUI component cleanly
  CHECK: node -e "import('./bin/ui/App.js').then(m => console.log('SUCCESS: App component loaded:', typeof m.App))"
  EXPECT: SUCCESS: App component loaded: function
  EVIDENCE: exit=0; shell=C:\windows\system32\cmd.exe; cwd=C:\Users\Ansh\OneDrive\Desktop\evil-ai; path=85ff3c42ef83/94 entries; EXPECT=matched; output-sha256=a0c0af323f299fc263dfca105bc00d7c893f8e330833dbdb6ecaca43052efd63; output-bytes=40

- [x] G3: All 3 GSD planning artifacts created during exploration exist
  CHECK: node -e "const fs = require('fs'); const files = ['.planning/notes/interactive-ink-tui-architecture.md', '.planning/todos/pending/implement-ink-multi-pane-cli-dashboard.md', '.planning/REQUIREMENTS.md']; const ok = files.every(f => fs.existsSync(f)); if (ok) console.log('SUCCESS: all artifacts present');"
  EXPECT: SUCCESS: all artifacts present
  EVIDENCE: exit=0; shell=C:\windows\system32\cmd.exe; cwd=C:\Users\Ansh\OneDrive\Desktop\evil-ai; path=85ff3c42ef83/94 entries; EXPECT=matched; output-sha256=79916122f61c32dded3d2039aadbff2a8d3c42dc9a1c81f367f493f01de6e2d1; output-bytes=31
