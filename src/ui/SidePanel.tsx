import React from 'react';
import { Box, Text } from 'ink';

export interface ToolLogEntry {
  id: string;
  name: string;
  args: string;
  status: 'running' | 'success' | 'error';
  timestamp: string;
}

interface SidePanelProps {
  systemStats: {
    cpu: string;
    memory: string;
    tokens: number;
    latencyMs: number;
  };
  toolLogs: ToolLogEntry[];
  vaultState: {
    unlocked: boolean;
    keyCount: number;
  };
}

export const SidePanel: React.FC<SidePanelProps> = ({
  systemStats,
  toolLogs,
  vaultState,
}) => {
  return (
    <Box flexDirection="column" width="30%" paddingLeft={1}>
      {/* System Stats Box */}
      <Box
        flexDirection="column"
        borderStyle="round"
        borderColor="cyan"
        paddingX={1}
        marginBottom={1}
      >
        <Text bold color="cyan">
          📊 SYSTEM MONITOR
        </Text>
        <Text color="gray">──────────────────</Text>
        <Text>
          Latency: <Text color="green">{systemStats.latencyMs} ms</Text>
        </Text>
        <Text>
          Tokens: <Text color="yellow">{systemStats.tokens}</Text>
        </Text>
        <Text>
          Memory: <Text color="magenta">{systemStats.memory}</Text>
        </Text>
      </Box>

      {/* Live Tool Execution Log Box */}
      <Box
        flexDirection="column"
        borderStyle="round"
        borderColor="yellow"
        paddingX={1}
        marginBottom={1}
        flexGrow={1}
      >
        <Text bold color="yellow">
          ⚡ LIVE TOOL LOG
        </Text>
        <Text color="gray">──────────────────</Text>
        {toolLogs.length === 0 ? (
          <Text dimColor>No tool calls executed yet.</Text>
        ) : (
          toolLogs.slice(-5).map((log) => (
            <Box key={log.id} flexDirection="column" marginBottom={1}>
              <Text bold color={log.status === 'error' ? 'red' : log.status === 'running' ? 'yellow' : 'green'}>
                ● {log.name}
              </Text>
              <Text dimColor wrap="truncate-end">
                {log.args}
              </Text>
            </Box>
          ))
        )}
      </Box>

      {/* Encrypted Vault Box */}
      <Box
        flexDirection="column"
        borderStyle="round"
        borderColor={vaultState.unlocked ? 'green' : 'red'}
        paddingX={1}
      >
        <Text bold color={vaultState.unlocked ? 'green' : 'red'}>
          🔒 ENCRYPTED VAULT
        </Text>
        <Text color="gray">──────────────────</Text>
        <Text>
          Status:{' '}
          <Text bold color={vaultState.unlocked ? 'green' : 'red'}>
            {vaultState.unlocked ? 'UNLOCKED' : 'LOCKED'}
          </Text>
        </Text>
        <Text>
          Stored Secrets: <Text bold color="yellow">{vaultState.keyCount}</Text>
        </Text>
      </Box>
    </Box>
  );
};
