import Test from "@/components/test";
import Back from "@/components/back";

export default function Mid() {
  const test = [
    {
      question: "What is a synonym of 'bonito'?",
      answers: ["Rápido", "Feo", "Hermoso", "Sucio"],
      correct: 2,
    },
    {
      question:
        "How do you conjugate 'correr' in the first person present tense?",
      answers: ["Corre", "Corres", "Corro", "Corré"],
      correct: 2,
    },
    {
      question: "How do you say 'I am 20 years old' in Spanish?",
      answers: [
        "Soy veinte años",
        "Tengo veinte años",
        "Estoy veinte años",
        "Soy veinte",
      ],
      correct: 1,
    },
    {
      question: "What does 'aunque' mean in English?",
      answers: ["Although", "Unless", "Because", "Whenever"],
      correct: 0,
    },
    {
      question: "Which of these mean 'I like to read'? (Select all that apply)",
      answers: [
        "gustar leer",
        "Leer no gusta",
        "A mí me gusta leer",
        "Yo leo gusta",
      ],
      correct: 2,
    },
  ];

  return (
    <div className="App">
      <Back />
      <h1 className="title">Mid spanish</h1>
      <Test questions={test} />
    </div>
  );
}
