import Test from "@/components/test";
import Back from "@/components/back";

export default function Mid() {
  const test = [
    {
      question: "What does 'tandis que' mean in English?",
      answers: ["Whenever", "As long as", "While", "Unless"],
      correct: 2,
    },
    {
      question: "Which sentence correctly uses the subjunctive?",
      answers: [
        "Il faut que je parte.",
        "Je sais qu'il vient.",
        "J'espère qu'il va.",
        "Il est sûr qu'elle a raison.",
      ],
      correct: 0,
    },
    {
      question: "What does 'peut-être' mean in English?",
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
        "Which of these means 'It is important that he studies' in French?",
      answers: [
        "Il est important qu'il étudie.",
        "Il est important qu'il étudier.",
        "Il est important qu'il a étudié.",
        "Il est important qu'il étudie.",
      ],
      correct: 0,
    },
  ];

  return (
    <div className="App">
      <Back />
      <h1 className="title">Mid french</h1>
      <Test questions={test} />
    </div>
  );
}
