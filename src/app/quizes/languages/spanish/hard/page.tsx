import Test from "@/components/test";
import Back from "@/components/back";

export default function Mid() {
  const test = [
    {
      question: "What does 'en cuanto' mean in English?",
      answers: ["As long as", "Regarding", "As soon as", "At the same time"],
      correct: 2,
    },
    {
      question: "Which sentence correctly uses the subjunctive?",
      answers: [
        "Espero que tienes éxito.",
        "Dudo que ella venga hoy.",
        "Es cierto que él sabe.",
        "Creo que lo hacen.",
      ],
      correct: 1,
    },
    {
      question: "What does 'a lo mejor' mean in English?",
      answers: ["The best", "Most likely", "Maybe", "Very likely"],
      correct: 2,
    },
    {
      question: "Choose the correct form: 'If I had known, I ___ told you.'",
      answers: ["have", "will", "would have", "am"],
      correct: 2,
    },
    {
      question: "Which of these means 'It is necessary that he study'?",
      answers: [
        "Es necesario que estudia.",
        "Es necesario que él estudiar.",
        "Es necesario que él estudie.",
        "Es necesario que estudies él.",
      ],
      correct: 2,
    },
  ];

  return (
    <div className="App">
      <Back />
      <h1 className="title">Hard Spanish</h1>
      <Test questions={test} />
    </div>
  );
}
