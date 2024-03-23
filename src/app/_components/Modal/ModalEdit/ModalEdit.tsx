"use client";
import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";
import { EditTaskForm } from "../../form/EditTaskForm";

function ModalEdit() {
    const searchParams = useSearchParams();
    const modal = searchParams.get("modaledit");
    const pathname = usePathname();

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
                            <EditTaskForm/>
                        </div>
                    </div>
                </dialog>
            }
        </>
    );
}

export default ModalEdit;