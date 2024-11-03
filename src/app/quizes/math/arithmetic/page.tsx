import Test from "@/components/test";
import Back from "@/components/back";

export default function Arithmetic() {
  const test = [
    {
      question: "What is 2 + 2?",
      answers: ["4", "5", "6", "7"],
      correct: 0,
    },
    {
      question: "What is 5 - 3?",
      answers: ["4", "3", "2", "1"],
      correct: 2,
    },
    {
      question: "What is 7 + 3?",
      answers: ["9", "10", "8", "11"],
      correct: 1,
    },
    {
      question: "What is 6 - 2?",
      answers: ["2", "4", "5", "3"],
      correct: 1,
    },
    {
      question: "What is 3 x 2?",
      answers: ["5", "9", "4", "6"],
      correct: 3,
    },
    {
      question: "What is 8 ÷ 4?",
      answers: ["4", "3", "2", "1"],
      correct: 2,
    },
    {
      question: "What is 10 - 7?",
      answers: ["3", "4", "2", "1"],
      correct: 0,
    },
    {
      question: "What is 4 x 2?",
      answers: ["7", "6", "8", "9"],
      correct: 2,
    },
    {
      question: "What is 9 ÷ 3?",
      answers: ["2", "3", "4", "5"],
      correct: 1,
    },
    {
      question: "What is 12 ÷ 3?",
      answers: ["6", "3", "2", "4"],
      correct: 3,
    },
  ];

  return (
    <div className="App">
      <Back />
      <h1 className="title">Arithmetic</h1>
      <Test questions={test} />
    </div>
  );
}
