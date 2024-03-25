"use client"
import { DashBoardHeader } from "./_components/Header/HeaderDashBoard";
import { TaskSection } from "./_components/PostList/TaskSection";

function DashBoard() {
    return (
        <>
            <DashBoardHeader />
            <TaskSection />
        </>
    );
}

export default DashBoard;
