import Link from "next/link"

export const DashBoardHeader = () => {
    return (
        <header className="w-[100%] border-b-2">
            <div className="p-5 w-[100%] max-w-2xl mx-auto flex flex-row justify-between items-center">
                <h1 className="font-black text-lg">Task Manager</h1>
                <Link className="bg-[#868E96] text-white text-base font-medium rounded p-3 hover:bg-[#6C737B] flex justify-center max-w-15" href="/">Logout</Link>
            </div>
        </header>
    )
}