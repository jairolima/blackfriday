import { DefaultTheme, theme } from "@chakra-ui/core";

// Let's say you want to add custom colors
const CustomTheme: DefaultTheme = {
    ...theme,
    fonts: {
        ...theme.fonts,
        heading: "Open Sans, system-ui, sans-serif",
        body: "Open Sans, system-ui, sans-serif",
        mono: "Menlo, monospace",
    },
    fontWeights: {
        ...theme.fontWeights,
        normal: 300,
        medium: 400,
        bold: 700,
    },
    radii: {
        ...theme.radii,
        sm: '5px',
        md: '8px',
    },
};

export default CustomTheme;