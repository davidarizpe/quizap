import Quiz from "@/components/quiz";
import Link from "next/link";

export default function Math() {
  const topics = ["arithmetic"];

  return (
    <div className="App">
      <Link href="/" className="back">
        &larr;
      </Link>
      <h1 className="title">Math quizes</h1>
      <main className="main">
        <section className="topics flex justify-center gap-3 m-5 flex-wrap">
          {topics.map((topic) => (
            <Quiz key={topic} topic={"math"} name={topic} />
          ))}
        </section>
      </main>
    </div>
  );
}
