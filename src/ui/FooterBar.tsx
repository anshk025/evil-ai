import React from 'react';
import { Box, Text } from 'ink';

export const FooterBar: React.FC = () => {
  return (
    <Box
      borderStyle="single"
      borderColor="gray"
      paddingX={1}
      justifyContent="space-between"
    >
      <Text dimColor>
        <Text bold color="yellow">
          Tab
        </Text>{' '}
        Switch Focus |{' '}
        <Text bold color="yellow">
          Ctrl+V
        </Text>{' '}
        Toggle Vault |{' '}
        <Text bold color="yellow">
          /help
        </Text>{' '}
        Commands |{' '}
        <Text bold color="yellow">
          Ctrl+C
        </Text>{' '}
        Exit
      </Text>
      <Text color="gray">EVIL-AI v1.0.0</Text>
    </Box>
  );
};
