import { useRouter } from 'next/router';
import { api } from "~/trpc/react";



export const ModalCreateForm = () => {

    const createTask = api.tasks.create.useMutation({});

    const handleSubmit = async (event: any) => {
        const taskName = event.target.taskName.value;
        const selectedPhase = event.target.phase.value;
        
        createTask.mutate({
            title: taskName,
            status: selectedPhase
          });

        
    };

    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-1">
            <label htmlFor="taskName">Task Name</label>
            <input
                type="text"
                name="taskName" 
                placeholder="Task name"
                className="bg-[#e6e5e5] rounded w-[100%] h-11 px-1 py-4 border-none focus:outline-none focus:ring-2 focus:border-transparent"
                required
            />
            <label htmlFor="phase">Select Phase</label>
            <select
                name="phase"
                className="bg-[#e6e5e5] rounded w-[100%] h-11 px-1 py-3 border-none focus:outline-none focus:ring-2 focus:border-transparent"
            >
                <option value="To do">To do</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
            </select>
            <button className="bg-[#29b6f6] text-white text-base font-medium rounded w-[100%] p-3 hover:bg-[#00aeff]" type='submit'>Submit</button>
        </form>
    )
}