export const saveDarkModePreference = (darkMode) => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
};

export const getDarkModePreference = () => {
    let darkMode = false;
    if (typeof window !== 'undefined') {
        darkMode = window.localStorage.getItem("darkMode");
    }
    console.log(darkMode)
    return darkMode ? JSON.parse(localStorage.getItem(darkMode)) : false;
};