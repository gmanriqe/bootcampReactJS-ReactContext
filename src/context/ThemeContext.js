import { createContext, useState } from "react";

export const lightTheme = {
    type: "light",
    colors: {
        background_: '#FFF',
        color_: '#303032',
        paragraph_: '#303032',
    }
}

export const darkTheme = {
    type: "dark",
    colors: {
        background_: '#303032',
        color_: '#FFF',
        paragraph_: '#FFF',
    }
}

// Creacion de context
export const ThemeContext = createContext(lightTheme);

// Creacion de provider
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(lightTheme);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}