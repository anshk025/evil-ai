import React from 'react';
import { Box } from 'ink';
import { HeaderBar } from './HeaderBar.js';
import { SidePanel, ToolLogEntry } from './SidePanel.js';
import { ChatStream, ChatMessage } from './ChatStream.js';
import { FooterBar } from './FooterBar.js';

export interface AppProps {
  model: string;
  persona: string;
  provider: string;
  autoApprove: boolean;
  activeAgentsCount: number;
  messages: ChatMessage[];
  streamingThought?: string;
  isProcessing: boolean;
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

export const App: React.FC<AppProps> = (props) => {
  return (
    <Box flexDirection="column" height="100%">
      <HeaderBar
        model={props.model}
        persona={props.persona}
        provider={props.provider}
        autoApprove={props.autoApprove}
        activeAgentsCount={props.activeAgentsCount}
      />

      <Box flexDirection="row" flexGrow={1} marginBottom={1}>
        <ChatStream
          messages={props.messages}
          streamingThought={props.streamingThought}
          isProcessing={props.isProcessing}
        />
        <SidePanel
          systemStats={props.systemStats}
          toolLogs={props.toolLogs}
          vaultState={props.vaultState}
        />
      </Box>

      <FooterBar />
    </Box>
  );
};
