import DashBoard from "./dashboard/page";

export interface PropsSetUpdate {
  setId: any
  setTitle: any
  setStatus: any
}

export default function Home({setId, setTitle, setStatus}: PropsSetUpdate) {
  return (
    <>
      <main className="h-[100vh]">
        <DashBoard setId={setId} setTitle={setTitle} setStatus={setStatus}/>
      </main>
    </>
  );
}
