import React, { useState } from 'react';
import { api } from '~/trpc/react';

export const EditTaskForm = ({ id, title: initialTitle, status: initialStatus }: any) => {
    const [title, setTitle] = useState(initialTitle);
    const [status, setStatus] = useState(initialStatus);

    const updateTaks = api.tasks.update.useMutation({})

    const handleTitleChange = (e: any) => {
        setTitle(e.target.value);
    };

    const handleStatusChange = (e: any) => {
        setStatus(e.target.value);
    };

    const handleSubmit = (e: any) => {
        updateTaks.mutate({
            id: id,
            title: title,
            status: status
        })
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-1">
            <label htmlFor="">Task Name</label>
            <input
                type="text"
                placeholder="Task name"
                value={title}
                onChange={handleTitleChange}
                className="bg-[#e6e5e5] rounded w-[100%] h-11 px-1 py-4 border-none focus:outline-none focus:ring-2 focus:border-transparent"
            />
            <label htmlFor="">Select Fase</label>
            <select
                value={status}
                onChange={handleStatusChange}
                className="bg-[#e6e5e5] rounded w-[100%] h-11 px-1 py-3 border-none focus:outline-none focus:ring-2 focus:border-transparent"
            >
                <option value="To do">To do</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
            </select>
            <button
                type="submit"
                className="bg-[#29b6f6] text-white text-base font-medium rounded w-[100%] p-3 hover:bg-[#00aeff]"
            >
                Submit
            </button>
        </form>
    );
};
