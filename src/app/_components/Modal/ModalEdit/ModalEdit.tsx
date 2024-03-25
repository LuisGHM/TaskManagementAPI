"use client";
import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";
import { EditTaskForm } from "../../form/EditTaskForm";
import { useContext } from "react";
import { useAppContext } from "~/providers/UpdateProvider";


function ModalEdit() {
    const searchParams = useSearchParams();
    const modal = searchParams.get("modaledit");
    const pathname = usePathname();

    const { id, title, status } = useAppContext(); 
    
    return (
        <>
            {modal &&
                <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                    <div className="bg-white m-auto p-8 w-full max-w-96 flex flex-col gap-4">
                        <div className="flex flex-row items-center justify-between">
                            <p>Edit Task</p>
                            <Link href={pathname}>
                                <button type="button" className="bg-red-500 text-white p-2">Close</button>
                            </Link>
                        </div>
                        <div>
                            <EditTaskForm id={id} title={title} status={status}/>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </dialog>
            }
        </>
    );
}


export default ModalEdit;
