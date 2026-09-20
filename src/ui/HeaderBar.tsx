import React from 'react';
import { Box, Text } from 'ink';

interface HeaderBarProps {
  model: string;
  persona: string;
  provider: string;
  autoApprove: boolean;
  activeAgentsCount: number;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  model,
  persona,
  provider,
  autoApprove,
  activeAgentsCount,
}) => {
  return (
    <Box
      flexDirection="column"
      borderStyle="single"
      borderColor="magenta"
      paddingX={1}
      marginBottom={1}
    >
      <Box justifyContent="space-between">
        <Text bold color="red">
          💀 EVIL-AI — THE ARCHITECT [2099 UNFILTERED TERMINAL]
        </Text>
        <Text color="green">● ONLINE</Text>
      </Box>

      <Box gap={2} marginTop={0}>
        <Text color="cyan">
          Model: <Text bold color="yellow">{model}</Text>
        </Text>
        <Text color="cyan">
          Mode: <Text bold color="magenta">{persona.toUpperCase()}</Text>
        </Text>
        <Text color="cyan">
          Gateway: <Text bold color="blue">{provider.toUpperCase()}</Text>
        </Text>
        <Text color="cyan">
          AutoApprove:{' '}
          <Text bold color={autoApprove ? 'green' : 'gray'}>
            {autoApprove ? 'ON' : 'OFF'}
          </Text>
        </Text>
        {activeAgentsCount > 0 && (
          <Text color="yellow">
            Subagents: <Text bold>{activeAgentsCount} ACTIVE</Text>
          </Text>
        )}
      </Box>
    </Box>
  );
};
