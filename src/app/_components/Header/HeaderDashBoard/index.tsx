"use client"
import { signIn, signOut, useSession } from "next-auth/react"

export const DashBoardHeader = () => {
    const {data: sessionData } = useSession();

    return (
        <header className="w-[100%] border-b-2">
            <div className="p-5 w-[100%] max-w-2xl mx-auto flex flex-row justify-between items-center">
                <h1 className="font-black text-lg">{sessionData?.user?.name ? sessionData.user.name : "Please login"}</h1>
                {sessionData?.user ? (<button onClick={() => signOut()} className="bg-[#868E96] text-white text-base font-medium rounded p-3 hover:bg-[#6C737B] flex justify-center max-w-15">Logout</button>) : (<button onClick={() => signIn()} className="bg-[#868E96] text-white text-base font-medium rounded p-3 hover:bg-[#6C737B] flex justify-center max-w-15">Sign in</button>)}
            </div>
        </header>
    )
}
