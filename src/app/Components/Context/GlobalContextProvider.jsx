'use client'

import { createContext, useState } from "react";

export const GlobalContext = createContext({});

function GlobalContextProvider({ children }) {
    const [snackbarData, setSnackbarData] = useState({
        status: false,
        message: "",
        severity: "success",
    });
    return (
        <GlobalContext.Provider
            value={{
                snackbarData,
                setSnackbarData
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider
