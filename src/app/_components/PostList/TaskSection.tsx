import Link from "next/link"
import { PostCard } from "./PostCard/PostCard"

export const TaskSection = () => {
    return(
        <main className="w-[100%]">
            <div className="max-w-2xl mx-auto">
                <div className="p-5 w-[100%] flex flex-row justify-between items-center">
                    <h2 className="font-medium">Tasks</h2>
                    <Link href="?modalcreate=true"><button className="font-medium text-base bg-[#29b6f6] text-white rounded p-3 hover:bg-[#00aeff] max-w-8 max-h-8 flex justify-center items-center">+</button></Link>
                </div>
                <div>
                    <ul className="bg-[#c4d8e7] p-2 flex flex-col gap-4">
                        <PostCard/>
                    </ul>
                </div>
            </div>

        </main>
    )
}