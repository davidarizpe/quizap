import Test from "@/components/test";
import Back from "@/components/back";

export default function Easy() {
  const test = [
    {
      question: "How do you say 'house' in German?",
      answers: ["Hund", "Haus", "Auto", "Maus"],
      correct: 1,
    },
    {
      question: "What is the definite article for 'Buch'?",
      answers: ["Die", "Das", "Der", "Den"],
      correct: 1,
    },
    {
      question: "What is the plural of 'Kind'?",
      answers: ["Kinder", "Kinds", "Kinderen", "Kindes"],
      correct: 0,
    },
    {
      question: "How do you say 'Good night' in German?",
      answers: ["Guten Morgen", "Guten Abend", "Gute Nacht", "Guten Tag"],
      correct: 2,
    },
    {
      question: "What does 'Mutter' mean in English?",
      answers: ["Mother", "Father", "Sister", "Brother"],
      correct: 0,
    },
  ];

  return (
    <div className="App">
      <Back />
      <h1 className="title">Easy German</h1>
      <Test questions={test} />
    </div>
  );
}
