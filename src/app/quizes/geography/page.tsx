import Quiz from "@/components/quiz";
import Back from "@/components/back";

export default function Math() {
  const topics = ["capitals", "countries", "general"];

  return (
    <div className="App">
      <Back></Back>
      <h1 className="title">Geography quizes</h1>
      <main className="main">
        <section className="topics flex justify-center gap-3 m-5 flex-wrap">
          {topics.map((topic) => (
            <Quiz key={topic} topic={"geography"} name={topic} />
          ))}
        </section>
      </main>
    </div>
  );
}
