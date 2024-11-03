import Quiz from "@/components/quiz";
import Back from "@/components/back";

export default function Spanish() {
  const topics = ["easy", "mid", "hard"];

  return (
    <div className="App">
      <Back></Back>
      <h1 className="title">Spanish quizes</h1>
      <main className="main">
        <section className="topics flex justify-center gap-3 m-5 flex-wrap">
          {topics.map((topic) => (
            <Quiz key={topic} topic={"languages/spanish"} name={topic} />
          ))}
        </section>
      </main>
    </div>
  );
}
