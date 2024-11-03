import Quiz from "@/components/quiz";
import Back from "@/components/back";

export default function Math() {
  const topics = ["easy", "mid", "hard"];

  return (
    <div className="App">
      <Back></Back>
      <h1 className="title">General Culture quizes</h1>
      <main className="main">
        <section className="topics flex justify-center gap-3 m-5 flex-wrap">
          {topics.map((topic) => (
            <Quiz key={topic} topic={"generalculture"} name={topic} />
          ))}
        </section>
      </main>
    </div>
  );
}
