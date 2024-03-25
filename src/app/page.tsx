import DashBoard from "./dashboard/page";

export interface PropsSetUpdate {
  setId: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}

function Home({setId, setTitle, setStatus}: PropsSetUpdate) {
  return (
    <>
      <main className="h-[100vh]">
        <DashBoard setId={setId} setTitle={setTitle} setStatus={setStatus}/>
      </main>
    </>
  );
}


export default Home;