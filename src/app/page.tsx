import { SessionProvider } from "next-auth/react";
import DashBoard from "./dashboard/page";

export default function Home() {
  return (
    <>
      <main className="h-[100vh]">
        <DashBoard/>
      </main>
    </>
  );
}
