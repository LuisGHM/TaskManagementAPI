import { DashBoardHeader } from "../_components/Header/HeaderDashBoard";
import { SearchSection } from "../_components/Section/SearchSection/SearchSection";
import { TaskSection } from "../_components/PostList/TaskSection";


export default function DashBoard () {
    return(
        <>
            <DashBoardHeader/>
            <SearchSection/>
            <TaskSection/>
        </>
    )
}