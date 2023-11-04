import React, { createContext, useState, useEffect } from "react";
import { saveDarkModePreference, getDarkModePreference } from "../utils/utility";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(getDarkModePreference());

    useEffect(() => {
        saveDarkModePreference(darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    };

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export { DarkModeContext, DarkModeProvider };