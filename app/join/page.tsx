import JoinForm from "../Components/join_form";

export default function Home() {
  return (
    <div className="page grid min-h-screen grid-rows-[auto_1fr_auto]">
      <header className="join-header w-full pt-72 px-72">
          
      </header>
      <main className="grid grid-cols-12 grid-rows-1">
        <div className="main-container col-start-5 col-span-4">
          <JoinForm />
        </div>
      </main>
      <footer className="join-footer mt-auto w-full pb-72 px-72">

      </footer>
    </div>
  );
}
