"use client"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { api } from "~/trpc/react"
import PostCard from "./PostCard/PostCard";
import { Key, useState } from "react";
import { useAppContext } from "~/providers/UpdateProvider";

export const TaskSection = () => {
    const [filter, setFilter] = useState('all');

    const { tasks } = useAppContext(); 

    
    const filteredTasks = () => {
        if (!tasks) return [];
        if (filter === 'all') return tasks;
        return tasks.filter((task: { id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            status: string;
            userId: string; }) => task.status === filter);
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
                        {filteredTasks().map((task: { id: string ; title: string; status: string; }) => (
                             <PostCard key={task.id} id={task.id} title={task.title} status={task.status}/>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    )
}
