import Test from "@/components/test";
import Back from "@/components/back";

export default function Mid() {
  const test = [
    {
      question: "What does 'sobald' mean in English?",
      answers: ["As long as", "As soon as", "Unless", "Whereas"],
      correct: 1,
    },
    {
      question: "Which sentence correctly uses the Konjunktiv II mood?",
      answers: [
        "Ich wünsche, dass du kommen würdest.",
        "Ich hoffe, dass du kommst.",
        "Ich glaube, dass er ist.",
        "Ich weiß, dass du da warst.",
      ],
      correct: 0,
    },
    {
      question: "What does 'je nachdem' mean in English?",
      answers: ["Depending on", "Despite", "Because of", "As if"],
      correct: 0,
    },
    {
      question: "Choose the correct form: 'If I had known, I ___ told you.'",
      answers: ["have", "would have", "will", "am"],
      correct: 1,
    },
    {
      question: "Which of these means 'It is necessary that he study'?",
      answers: [
        "Es ist notwendig, dass er studiert.",
        "Es ist nötig, dass er lernen.",
        "Es muss, dass er studiert.",
        "Es ist wichtig, dass er lernst.",
      ],
      correct: 0,
    },
  ];

  return (
    <div className="App">
      <Back />
      <h1 className="title">Hard german</h1>
      <Test questions={test} />
    </div>
  );
}
