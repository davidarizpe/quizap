import Test from "@/components/test";
import Back from "@/components/back";

export default function Arithmetic() {
  const test = [
    {
      question: "If x + 3 = 7, what is the value of x?",
      answers: ["4", "3", "2", "5"],
      correct: 0,
    },
    {
      question: "Solve for y: 2y = 8.",
      answers: ["3", "6", "4", "2"],
      correct: 2,
    },
    {
      question: "What is the value of x in the equation 3x = 9?",
      answers: ["2", "6", "4", "3"],
      correct: 3,
    },
    {
      question: "If 5x - 10 = 0, what is x?",
      answers: ["5", "10", "3", "2"],
      correct: 3,
    },
    {
      question: "Simplify: 2(x + 3) when x = 2.",
      answers: ["12", "10", "8", "14"],
      correct: 0,
    },
    {
      question: "Solve for x: x/2 = 4.",
      answers: ["2", "4", "6", "8"],
      correct: 3,
    },
    {
      question: "If y = 2x and x = 3, what is y?",
      answers: ["4", "5", "8", "6"],
      correct: 3,
    },
    {
      question: "What is the value of 3x + 2 if x = 1?",
      answers: ["5", "7", "4", "6"],
      correct: 0,
    },
    {
      question: "Solve for x in the equation x - 3 = 5.",
      answers: ["6", "8", "5", "3"],
      correct: 1,
    },
    {
      question: "If 4y = 12, what is y?",
      answers: ["2", "4", "3", "6"],
      correct: 2,
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
