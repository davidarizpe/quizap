import Test from "@/components/test";
import Back from "@/components/back";

export default function Mid() {
  const test = [
    {
      question: "What is a synonym for 'bello'?",
      answers: ["Brutto", "Carino", "Pesante", "Scuro"],
      correct: 1,
    },
    {
      question:
        "How do you conjugate 'andare' (to go) in the first person present tense?",
      answers: ["Va", "Andiamo", "Vado", "Andare"],
      correct: 2,
    },
    {
      question: "How do you say 'I am 40 years old' in Italian?",
      answers: [
        "Ho quarant'anni",
        "Sono quarant'anni",
        "Ho anni quaranta",
        "Sono anni quarant'anni",
      ],
      correct: 0,
    },
    {
      question: "What does 'ma' mean in English?",
      answers: ["And", "But", "Or", "So"],
      correct: 1,
    },
    {
      question: "How do you say 'I like to read' in Italian?",
      answers: [
        "Mi piace leggere",
        "Leggere mi piace",
        "Amo leggere",
        "Leggo piace",
      ],
      correct: 0,
    },
  ];

  return (
    <div className="App">
      <Back />
      <h1 className="title">Mid italian</h1>
      <Test questions={test} />
    </div>
  );
}
