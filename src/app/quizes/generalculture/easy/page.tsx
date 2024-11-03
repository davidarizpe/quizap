import Test from "@/components/test";
import Back from "@/components/back";

export default function Easy() {
  const test = [
    {
      question: "What is the capital of France?",
      answers: ["Paris", "London", "Berlin", "Rome"],
      correct: 0,
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: ["Mars", "Earth", "Jupiter", "Venus"],
      correct: 2,
    },
    {
      question: "What is the smallest prime number?",
      answers: ["1", "2", "3", "5"],
      correct: 1,
    },
    {
      question: "Which ocean is the largest?",
      answers: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correct: 3,
    },
    {
      question: "How many continents are there on Earth?",
      answers: ["5", "6", "7", "8"],
      correct: 2,
    },
    {
      question: "What is the boiling point of water in Celsius?",
      answers: ["90", "100", "110", "120"],
      correct: 1,
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      answers: ["Hemingway", "Shakespeare", "Orwell", "Austen"],
      correct: 1,
    },
    {
      question: "What is the fastest land animal?",
      answers: ["Elephant", "Cheetah", "Horse", "Lion"],
      correct: 1,
    },
    {
      question: "What is the capital of Japan?",
      answers: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
      correct: 2,
    },
  ];

  return (
    <div className="App">
      <Back />
      <h1 className="title">General Culture easy</h1>
      <Test questions={test} />
    </div>
  );
}
