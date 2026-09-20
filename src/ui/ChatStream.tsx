import React from 'react';
import { Box, Text } from 'ink';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system' | 'thought';
  content: string;
  timestamp: string;
}

interface ChatStreamProps {
  messages: ChatMessage[];
  streamingThought?: string;
  isProcessing: boolean;
}

export const ChatStream: React.FC<ChatStreamProps> = ({
  messages,
  streamingThought,
  isProcessing,
}) => {
  return (
    <Box
      flexDirection="column"
      width="70%"
      borderStyle="round"
      borderColor="blue"
      paddingX={1}
      flexGrow={1}
    >
      <Text bold color="blue">
        💬 ARCHITECT CHAT & REASONING STREAM
      </Text>
      <Text color="gray">──────────────────────────────────────────────</Text>

      <Box flexDirection="column" flexGrow={1} marginBottom={1}>
        {messages.map((msg) => {
          if (msg.role === 'user') {
            return (
              <Box key={msg.id} marginY={1}>
                <Text bold color="magenta">
                  › OPERATOR:{' '}
                </Text>
                <Text color="white">{msg.content}</Text>
              </Box>
            );
          } else if (msg.role === 'thought') {
            return (
              <Box key={msg.id} marginY={1} paddingLeft={2}>
                <Text italic color="gray">
                  💭 [THOUGHT]: {msg.content}
                </Text>
              </Box>
            );
          } else {
            return (
              <Box key={msg.id} marginY={1}>
                <Text bold color="red">
                  [VADER]:{' '}
                </Text>
                <Text color="cyan">{msg.content}</Text>
              </Box>
            );
          }
        })}

        {isProcessing && streamingThought && (
          <Box marginY={1} paddingLeft={2}>
            <Text italic color="yellow">
              ⚡ [LIVE THOUGHT STREAM]: {streamingThought}
            </Text>
          </Box>
        )}

        {isProcessing && !streamingThought && (
          <Box marginY={1}>
            <Text color="yellow">⏳ [VADER IS COMPUTING SOLUTION...]</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};
