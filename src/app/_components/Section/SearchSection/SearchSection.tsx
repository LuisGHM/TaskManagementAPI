export const SearchSection = () => {
    return(
        <section className="w-[100%] border-b-2">
            <div className="p-5 w-[100%] max-w-2xl mx-auto flex flex-row justify-between items-center">
                <div className=" flex flex-row gap-3 max-w-[50%] w-[100%]">
                    <button className="bg-[#29b6f6] text-white text-base font-medium rounded w-[100%] p-3 hover:bg-[#00aeff]">To do</button>
                    <button className="bg-[#29b6f6] text-white text-base font-medium rounded w-[100%] p-3 hover:bg-[#00aeff]">Doing</button>
                    <button className="bg-[#29b6f6] text-white text-base font-medium rounded w-[100%] p-3 hover:bg-[#00aeff]">Done</button>
                </div>
                <input type="text" placeholder="Serach you task here..." className="bg-[#e6e5e5] rounded h-11 px-1 py-4 border-none focus:outline-none focus:ring-2 focus:border-transparent"/>
            </div>
        </section>
    )
}