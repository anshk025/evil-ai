import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Text } from 'ink';
export const FooterBar = () => {
    return (_jsxs(Box, { borderStyle: "single", borderColor: "gray", paddingX: 1, justifyContent: "space-between", children: [_jsxs(Text, { dimColor: true, children: [_jsx(Text, { bold: true, color: "yellow", children: "Tab" }), ' ', "Switch Focus |", ' ', _jsx(Text, { bold: true, color: "yellow", children: "Ctrl+V" }), ' ', "Toggle Vault |", ' ', _jsx(Text, { bold: true, color: "yellow", children: "/help" }), ' ', "Commands |", ' ', _jsx(Text, { bold: true, color: "yellow", children: "Ctrl+C" }), ' ', "Exit"] }), _jsx(Text, { color: "gray", children: "EVIL-AI v1.0.0" })] }));
};
