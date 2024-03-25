import Link from "next/link";
import { PropsSetUpdate } from "~/app/page";
import { api } from "~/trpc/react";


interface PostCardProps {
    id: string;
    title: string;
    status: string; 
    setId: any
    setTitle: any
    setStatus: any
}

const PostCard = ({ id, title, status, setId, setTitle, setStatus }: PostCardProps) => {

    const deleteTasks = api.tasks.delete.useMutation({
        onSuccess: () => window.location.reload()
    });

    const handleSubmit = async (id: string) => {
        await deleteTasks.mutate({ id: id }); // Removido ponto e vírgula desnecessário
    };

    return (
        <>
            <li id={id} className="bg-[#869aa8] flex flex-row justify-between p-2 text-white items-center">
                <h1 className="font-normal">{title}</h1>
                <div className="flex flex-row gap-3 justify-center items-center">
                    <span className="text-[#bcc9d6]">{status}</span>
                    <div className="flex flex-row gap-3">
                        <Link href="?modaledit=true">
                            <button className="hover:bg-[#768896] p-2" onClick={() => { setId(id); setTitle(title); setStatus(status); }}>Editar</button>
                        </Link>
                        <button className="hover:bg-[#768896] p-2" onClick={() => handleSubmit(id)}>Delete</button>
                    </div>
                </div>
            </li>
        </>
    );
};

export default PostCard;
