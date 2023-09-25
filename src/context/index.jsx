/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const HooksContext = createContext();

export const HooksProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return(
        <HooksContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </HooksContext.Provider>
    )
}
