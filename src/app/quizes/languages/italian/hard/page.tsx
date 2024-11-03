import Test from "@/components/test";
import Back from "@/components/back";

export default function Mid() {
  const test = [
    {
      question: "What does 'mentre' mean in English?",
      answers: ["Whenever", "As long as", "While", "Unless"],
      correct: 2,
    },
    {
      question: "Which sentence correctly uses the subjunctive?",
      answers: [
        "È importante che io parta.",
        "So che lui viene.",
        "Spero che lui va.",
        "È certo che lei ha ragione.",
      ],
      correct: 0,
    },
    {
      question: "What does 'forse' mean in English?",
      answers: ["Always", "Often", "Maybe", "Certainly"],
      correct: 2,
    },
    {
      question: "Choose the correct form: 'If I had known, I ___ called you.'",
      answers: ["have", "will", "would have", "am"],
      correct: 2,
    },
    {
      question:
        "Which of these means 'It is important that he studies' in Italian?",
      answers: [
        "È importante che lui studi.",
        "È importante che lui studiare.",
        "È importante che lui ha studiato.",
        "È importante che lui studia.",
      ],
      correct: 0,
    },
  ];

  return (
    <div className="App">
      <Back />
      <h1 className="title">Hard italian</h1>
      <Test questions={test} />
    </div>
  );
}
