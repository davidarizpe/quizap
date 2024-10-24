import Image from "next/image";

export default function Home() {
  return (
    <div className="App">
      <nav className="nav">
        <header className="flex gap-5">
          <Image
            className="rounded-2xl w-24 h-24"
            src="/favicon.ico"
            alt="Logo"
            width={75}
            height={75}
          ></Image>
          <h1 className="title">Quizap</h1>
        </header>
        <p className="description m-3 text-pretty max-w-xl">
          Learn fun, fast and easy with quizap! Discoer all we free quizes that
          you can view your knowledges and progress.
        </p>
      </nav>
    </div>
  );
}
