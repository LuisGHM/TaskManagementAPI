import { DashBoardHeader } from "../_components/Header/HeaderDashBoard";
import { SearchSection } from "../_components/Section/SearchSection/SearchSection";
import { TaskSection } from "../_components/PostList/TaskSection";
import Modal from "../_components/Modal/ModalEdit/ModalEdit";


export default function DashBoard () {
    return(
        <>
            <DashBoardHeader/>
            <SearchSection/>
            <TaskSection/>
        </>
    )
}