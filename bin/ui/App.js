import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from 'ink';
import { HeaderBar } from './HeaderBar.js';
import { SidePanel } from './SidePanel.js';
import { ChatStream } from './ChatStream.js';
import { FooterBar } from './FooterBar.js';
export const App = (props) => {
    return (_jsxs(Box, { flexDirection: "column", height: "100%", children: [_jsx(HeaderBar, { model: props.model, persona: props.persona, provider: props.provider, autoApprove: props.autoApprove, activeAgentsCount: props.activeAgentsCount }), _jsxs(Box, { flexDirection: "row", flexGrow: 1, marginBottom: 1, children: [_jsx(ChatStream, { messages: props.messages, streamingThought: props.streamingThought, isProcessing: props.isProcessing }), _jsx(SidePanel, { systemStats: props.systemStats, toolLogs: props.toolLogs, vaultState: props.vaultState })] }), _jsx(FooterBar, {})] }));
};
