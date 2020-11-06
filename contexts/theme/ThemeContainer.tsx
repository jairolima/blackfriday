import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import CustomTheme from "../../styles/theme"

function ThemeContainer({ children }) {
    return (
        <ThemeProvider theme={CustomTheme}>
            <CSSReset />
            {children}
        </ThemeProvider>
    );
}

export default ThemeContainer