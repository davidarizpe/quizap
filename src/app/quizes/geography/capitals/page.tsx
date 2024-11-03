import Test from "@/components/test";
import Back from "@/components/back";

export default function Capitals() {
  const test = [
    {
      question: "What is the capital of France?",
      answers: ["Berlin", "Madrid", "Rome", "Paris"],
      correct: 3,
    },
    {
      question: "What is the capital of Japan?",
      answers: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
      correct: 1,
    },
    {
      question: "What is the capital of Canada?",
      answers: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
      correct: 0,
    },
    {
      question: "What is the capital of Brazil?",
      answers: ["Rio de Janeiro", "Brasilia", "São Paulo", "Salvador"],
      correct: 1,
    },
    {
      question: "What is the capital of Australia?",
      answers: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
      correct: 1,
    },
    {
      question: "What is the capital of China?",
      answers: ["Shanghai", "Beijing", "Hong Kong", "Seoul"],
      correct: 1,
    },
    {
      question: "What is the capital of India?",
      answers: ["Delhi", "Chennai", "Kolkata", "Mumbai"],
      correct: 3,
    },
    {
      question: "What is the capital of Germany?",
      answers: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
      correct: 0,
    },
    {
      question: "What is the capital of UK?",
      answers: ["London", "Manchester", "Bristol", "Edinburgh"],
      correct: 0,
    },
    {
      question: "What is the capital of Russia?",
      answers: ["New York", "Moscow", "Chicago", "St. Petersburg"],
      correct: 1,
    },
    {
      question: "What is the capital of Mexico?",
      answers: ["Mexico City", "Monterrey", "Guadalajara", "Mexico state"],
      correct: 0,
    },
  ];

  return (
    <div className="App">
      <Back />
      <h1 className="title">Capitals</h1>
      <Test questions={test} />
    </div>
  );
}
