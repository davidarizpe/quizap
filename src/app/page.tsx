import Image from "next/image";
import Quiz from "@/components/quiz";

export default function Home() {
  const quizes = ["Math", "Languages", "general culture", "art", "geography"];

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

      <main className="main">
        <section className="quizes flex justify-center gap-3 m-5 flex-wrap">
          {quizes.map((quiz) => (
            <Quiz key={quiz} name={quiz} />
          ))}
        </section>
      </main>
    </div>
  );
}
