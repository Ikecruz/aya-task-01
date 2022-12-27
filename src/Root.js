import { ColorSchemeProvider, MantineProvider } from "@mantine/core"
import { useColorScheme } from "@mantine/hooks"
import { useState } from "react"
import App from "./App"
import './style.css';

const AppRoot = () => {

    const preferredColorScheme = useColorScheme()

    const [colorScheme, setColorScheme] = useState(preferredColorScheme);
    const toggleColorScheme = (value) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    const myTheme = {
        colorScheme: colorScheme,
        primaryColor: 'indigo',
        fontFamily: 'Pally',
    }

    return <>

        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={myTheme} withGlobalStyles withNormalizeCSS>
                <App />
            </MantineProvider>
        </ColorSchemeProvider>
    
    </>

}

export default AppRoot