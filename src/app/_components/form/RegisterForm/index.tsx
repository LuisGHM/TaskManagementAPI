import Link from "next/link"

export const RegisterPage = () => {
    return (
        <div className="w-[100%] h-[100%] max-w-[700px] mx-auto flex justify-center items-center">
            <form action="" className="flex flex-col bg-[#c4d8e7] gap-6 items-center py-10 px-5 w-[100%] max-w-md rounded-md shadow-lg">
                <h2 className="font-bold text-lg">Register</h2>
                <div className="flex flex-col w-[100%] gap-1">
                    <label htmlFor="" className="">Name</label>
                    <input type="email" placeholder="Type your name here..." className="bg-[#e6e5e5] rounded w-[100%] h-11 px-0 py-4 border-none focus:outline-none focus:ring-2 focus:border-transparent"/>
                </div>
                <div className="flex flex-col w-[100%] gap-1">
                    <label htmlFor="" className="">Email</label>
                    <input type="email" placeholder="Type your email here..." className="bg-[#e6e5e5] rounded w-[100%] h-11 px-0 py-4 border-none focus:outline-none focus:ring-2 focus:border-transparent"/>
                </div>
                <div className="flex flex-col w-[100%] gap-1">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Type your password here..." className="bg-[#e6e5e5] rounded w-[100%] h-11 px-0 py-4 border-none focus:outline-none focus:ring-2 focus:border-transparent"/>
                </div>
                <button className="bg-[#29b6f6] text-white text-base font-medium rounded w-[100%] p-3 hover:bg-[#00aeff]">Register</button>
                <Link className="bg-[#868E96] text-white text-base font-medium rounded w-[100%] p-3 hover:bg-[#6C737B] flex justify-center" href="/">Return</Link>
            </form>
        </div>
    )
}