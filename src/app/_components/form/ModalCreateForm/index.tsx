export const ModalCreateForm = () => {
    return(
        <form action="" className="flex flex-col gap-1">
            <label htmlFor="">Task Name</label>
            <input type="text" placeholder="Task name" className="bg-[#e6e5e5] rounded w-[100%] h-11 px-1 py-4 border-none focus:outline-none focus:ring-2 focus:border-transparent"/>
            <label htmlFor="">Select Fase</label>
            <select name="" id="" className="bg-[#e6e5e5] rounded w-[100%] h-11 px-1 py-3 border-none focus:outline-none focus:ring-2 focus:border-transparent">
                <option value="To do">To do</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
            </select>
        </form>
    )
}