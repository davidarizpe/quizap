import Test from "@/components/test";
import Back from "@/components/back";

export default function Mid() {
  const test = [
    {
      question: "What is a synonym for 'schön'?",
      answers: ["Hässlich", "Gut", "Hübsch", "Alt"],
      correct: 2,
    },
    {
      question:
        "How do you conjugate 'lesen' in the first person singular (ich) present tense?",
      answers: ["Lese", "Liest", "Lesen", "Leset"],
      correct: 0,
    },
    {
      question: "How do you say 'I am 30 years old' in German?",
      answers: [
        "Ich bin dreißig Jahre alt",
        "Ich habe dreißig Jahre",
        "Ich werde dreißig",
        "Ich war dreißig Jahre alt",
      ],
      correct: 0,
    },
    {
      question: "What does 'trotzdem' mean in English?",
      answers: ["However", "Nevertheless", "Because", "Unless"],
      correct: 1,
    },
    {
      question: "How do you say 'I like reading' in German?",
      answers: [
        "Ich lese mag",
        "Lesen mag ich",
        "Ich mag lesen",
        "Lese ich mag",
      ],
      correct: 2,
    },
  ];

  return (
    <div className="App">
      <Back />
      <h1 className="title">Mid german</h1>
      <Test questions={test} />
    </div>
  );
}
