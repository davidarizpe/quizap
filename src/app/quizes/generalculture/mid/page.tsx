import Test from "@/components/test";
import Back from "@/components/back";

export default function Mid() {
  const test = [
    {
      question: "What is the longest river in the world?",
      answers: ["Nile", "Amazon", "Yangtze", "Mississippi"],
      correct: 1,
    },
    {
      question: "In what year did humans first land on the Moon?",
      answers: ["1965", "1969", "1972", "1980"],
      correct: 1,
    },
    {
      question: "Who painted the Mona Lisa?",
      answers: ["Michelangelo", "Picasso", "Leonardo da Vinci", "Rembrandt"],
      correct: 2,
    },
    {
      question: "Which country has the largest population in the world?",
      answers: ["India", "United States", "Indonesia", "China"],
      correct: 3,
    },
    {
      question: "What is the lightest metal?",
      answers: ["Aluminum", "Lead", "Mercury", "Lithium"],
      correct: 3,
    },
    {
      question: "What is the most spoken language in South America?",
      answers: ["English", "Portuguese", "Spanish", "French"],
      correct: 2,
    },
    {
      question: "What is the capital of Canada?",
      answers: ["Toronto", "Ottawa", "Montreal", "Vancouver"],
      correct: 1,
    },
    {
      question: "How many bones are in the adult human body?",
      answers: ["206", "208", "210", "212"],
      correct: 0,
    },
    {
      question: "What is the official currency of Japan?",
      answers: ["Yen", "Won", "Dollar", "Rupee"],
      correct: 0,
    },
  ];

  return (
    <div className="App">
      <Back />
      <h1 className="title">General Culture mid</h1>
      <Test questions={test} />
    </div>
  );
}
