import { DashBoardHeader } from "../_components/Header/HeaderDashBoard";
import { SearchSection } from "../_components/Section/SearchSection/SearchSection";
import { TaskSection } from "../_components/PostList/TaskSection";
import Modal from "../_components/Modal/ModalEdit/ModalEdit";
import { PropsSetUpdate } from "../page";


export default function DashBoard ({setId, setTitle, setStatus}: PropsSetUpdate) {
    return(
        <>
            <DashBoardHeader/>
            <SearchSection/>
            <TaskSection setId={setId} setTitle={setTitle} setStatus={setStatus}/>
        </>
    )
}