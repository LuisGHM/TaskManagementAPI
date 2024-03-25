"use client"
import React, { ReactNode, createContext, useContext, useState } from "react";

interface NextUpdateProviders {
    children: React.ReactNode;
}

export const AppContext = createContext<any>(undefined);

export const UpdateProvider = ({ children }: NextUpdateProviders) => {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("");

    return (
        <AppContext.Provider
            value={{ id, setId, title, setTitle, status, setStatus }}
        >
            {children}
        </AppContext.Provider>
    );
};

export function useAppContext() {
    return useContext(AppContext);
}
