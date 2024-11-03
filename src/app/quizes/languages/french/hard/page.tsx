import Test from "@/components/test";
import Back from "@/components/back";

export default function Mid() {
  const test = [
    {
      question: "What is a synonym for 'beau'?",
      answers: ["Joli", "Moche", "Lourd", "Sombre"],
      correct: 0,
    },
    {
      question:
        "How do you conjugate 'aller' (to go) in the first person present tense?",
      answers: ["Va", "Allons", "Vais", "Aller"],
      correct: 2,
    },
    {
      question: "How do you say 'I am 25 years old' in French?",
      answers: [
        "J'ai vingt-cinq ans",
        "Je suis vingt-cinq ans",
        "Je suis âgé de vingt-cinq ans",
        "J'ai ans vingt-cinq",
      ],
      correct: 0,
    },
    {
      question: "What does 'mais' mean in English?",
      answers: ["And", "But", "Or", "So"],
      correct: 1,
    },
    {
      question: "How do you say 'I like to swim' in French?",
      answers: ["J'aime nager", "Je nage aime", "Aimer nager", "Je nager aime"],
      correct: 0,
    },
  ];

  return (
    <div className="App">
      <Back />
      <h1 className="title">Hard french</h1>
      <Test questions={test} />
    </div>
  );
}
