import Link from "next/link"
import Modal from "../../Modal/ModalEdit/ModalEdit"

export const PostCard = () => {
    
    
    return(
        <>
            <li className="bg-[#869aa8] flex flex-row justify-between p-2 text-white items-center">
                <h1 className="font-normal">Titulo da task</h1>
                <div className="flex flex-row gap-3 justify-center items-center">
                    <span className="text-[#bcc9d6]">Status</span>
                    <div className="flex flex-row gap-3">
                        <Link href="?modaledit=true"><button className=" hover:bg-[#768896] p-2">Editar</button></Link>
                        <button className="hover:bg-[#768896] p-2">Delete</button>
                    </div>
                </div>
            </li>
        </>
    )
}