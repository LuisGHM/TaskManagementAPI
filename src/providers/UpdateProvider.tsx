"use client"
import { useSession } from "next-auth/react";
import React, { ReactNode, createContext, useContext, useState } from "react";
import { api } from "~/trpc/react";

interface NextUpdateProviders {
    children: React.ReactNode;
}

export const AppContext = createContext<any>(undefined);

export const UpdateProvider = ({ children }: NextUpdateProviders) => {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("");
    const {data: sessionData } = useSession();

    const { data: tasks, refetch: refetchTasks} = api.tasks.getAll.useQuery(
        undefined,
        {
            enabled: sessionData?.user !== undefined
        }
    );

    return (
        <AppContext.Provider
            value={{ id, setId, title, setTitle, status, setStatus, tasks, refetchTasks }}
        >
            {children}
        </AppContext.Provider>
    );
};

export function useAppContext() {
    return useContext(AppContext);
}
