"use client"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { api } from "~/trpc/react"
import PostCard from "./PostCard/PostCard";
import { PropsSetUpdate } from "~/app/page";
import { useState } from "react";

export const TaskSection = ({setId, setTitle, setStatus}: PropsSetUpdate) => {
    const {data: sessionData } = useSession();
    const [filter, setFilter] = useState('all'); // Estado inicial para filtrar todas as tarefas

    const { data: tasks, refetch: refetchTasks} = api.tasks.getAll.useQuery(
        undefined,
        {
            enabled: sessionData?.user !== undefined
        }
    );
    
    const filteredTasks = () => {
        if (!tasks) return [];
        if (filter === 'all') return tasks;
        return tasks.filter(task => task.status === filter);
    }

    return(
        <main className="w-[100%]">
            <div className="max-w-2xl mx-auto">
                <div className="p-5 w-[100%] flex flex-row justify-between items-center">
                    <h2 className="font-medium">Tasks</h2>
                    <div className="flex gap-4">
                        <button onClick={() => setFilter('all')} className="font-medium text-base bg-[#29b6f6] text-white rounded p-3 hover:bg-[#00aeff] max-w-11 max-h-11 flex justify-center items-center">All</button>
                        <button onClick={() => setFilter('To do')} className="font-medium text-base bg-[#29b6f6] text-white rounded p-3 hover:bg-[#00aeff] max-w-13 max-h-11 flex justify-center items-center">To Do</button>
                        <button onClick={() => setFilter('Doing')} className="font-medium text-base bg-[#29b6f6] text-white rounded p-3 hover:bg-[#00aeff] max-w-13 max-h-11 flex justify-center items-center">Doing</button>
                        <button onClick={() => setFilter('Done')} className="font-medium text-base bg-[#29b6f6] text-white rounded p-3 hover:bg-[#00aeff] max-w-13 max-h-11 flex justify-center items-center">Done</button>
                    </div>
                    <Link href="?modalcreate=true" className="rounded max-w-11 max-h-11"><button className="font-medium bg-[#29b6f6] text-white rounded p-3 hover:bg-[#00aeff] max-w-11 max-h-11 flex justify-center items-center text-2xl">+</button></Link>
                </div>
                <div>
                    <ul className="bg-[#c4d8e7] p-2 flex flex-col gap-4">
                        {filteredTasks().map((task) => (
                             <PostCard key={task.id} id={task.id} title={task.title} status={task.status} setId={setId} setTitle={setTitle} setStatus={setStatus}/>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    )
}
