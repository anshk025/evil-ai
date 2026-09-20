import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Text } from 'ink';
export const ChatStream = ({ messages, streamingThought, isProcessing, }) => {
    return (_jsxs(Box, { flexDirection: "column", width: "70%", borderStyle: "round", borderColor: "blue", paddingX: 1, flexGrow: 1, children: [_jsx(Text, { bold: true, color: "blue", children: "\uD83D\uDCAC ARCHITECT CHAT & REASONING STREAM" }), _jsx(Text, { color: "gray", children: "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500" }), _jsxs(Box, { flexDirection: "column", flexGrow: 1, marginBottom: 1, children: [messages.map((msg) => {
                        if (msg.role === 'user') {
                            return (_jsxs(Box, { marginY: 1, children: [_jsxs(Text, { bold: true, color: "magenta", children: ["\u203A OPERATOR:", ' '] }), _jsx(Text, { color: "white", children: msg.content })] }, msg.id));
                        }
                        else if (msg.role === 'thought') {
                            return (_jsx(Box, { marginY: 1, paddingLeft: 2, children: _jsxs(Text, { italic: true, color: "gray", children: ["\uD83D\uDCAD [THOUGHT]: ", msg.content] }) }, msg.id));
                        }
                        else {
                            return (_jsxs(Box, { marginY: 1, children: [_jsxs(Text, { bold: true, color: "red", children: ["[VADER]:", ' '] }), _jsx(Text, { color: "cyan", children: msg.content })] }, msg.id));
                        }
                    }), isProcessing && streamingThought && (_jsx(Box, { marginY: 1, paddingLeft: 2, children: _jsxs(Text, { italic: true, color: "yellow", children: ["\u26A1 [LIVE THOUGHT STREAM]: ", streamingThought] }) })), isProcessing && !streamingThought && (_jsx(Box, { marginY: 1, children: _jsx(Text, { color: "yellow", children: "\u23F3 [VADER IS COMPUTING SOLUTION...]" }) }))] })] }));
};
