import Test from "@/components/test";
import Back from "@/components/back";

export default function Countries() {
  const test = [
    {
      question: "Which country is known for the Eiffel Tower?",
      answers: ["Spain", "Italy", "France", "Germany"],
      correct: 2,
    },
    {
      question: "Which country has the Great Wall?",
      answers: ["China", "Japan", "India", "South Korea"],
      correct: 0,
    },
    {
      question: "Which country is famous for the Pyramids of Giza?",
      answers: ["Jordan", "Egypt", "Morocco", "Turkey"],
      correct: 1,
    },
    {
      question: "Which country is home to the Amazon rainforest?",
      answers: ["Brazil", "Colombia", "Venezuela", "Peru"],
      correct: 0,
    },
    {
      question: "Which country has Mount Fuji?",
      answers: ["Thailand", "Vietnam", "South Korea", "Japan"],
      correct: 3,
    },
  ];

  return (
    <div className="App">
      <Back />
      <h1 className="title">Countries</h1>
      <Test questions={test} />
    </div>
  );
}
