import { DashBoardHeader } from "../_components/Header/HeaderDashBoard";
import { TaskSection } from "../_components/PostList/TaskSection";
import { PropsSetUpdate } from "../page";

function DashBoard ({setId, setTitle, setStatus}: PropsSetUpdate) {
    return(
        <>
            <DashBoardHeader/>
            <TaskSection setId={setId} setTitle={setTitle} setStatus={setStatus}/>
        </>
    )
}

export default DashBoard;