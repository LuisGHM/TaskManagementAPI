import { DashBoardHeader } from "../_components/Header/HeaderDashBoard";
import { TaskSection } from "../_components/PostList/TaskSection";

export interface PropsSetUpdate {
    setId: any
    setTitle: any
    setStatus: any
}

export default function DashBoard ({setId, setTitle, setStatus}: PropsSetUpdate) {
    return(
        <>
            <DashBoardHeader/>
            <TaskSection setId={setId} setTitle={setTitle} setStatus={setStatus}/>
        </>
    )
}