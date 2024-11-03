import Test from "@/components/test";
import Back from "@/components/back";

export default function Easy() {
  const test = [
    {
      question: "How do you say 'apple' in Spanish?",
      answers: ["Naranja", "Manzana", "Plátano", "Pera"],
      correct: 1,
    },
    {
      question: "What is the definite article for 'libro'?",
      answers: ["La", "Los", "El", "Las"],
      correct: 2,
    },
    {
      question: "What is the plural of 'gato'?",
      answers: ["Gatos", "Gatas", "Gates", "Gatoes"],
      correct: 0,
    },
    {
      question: "Which of these are not Spanish greetings?",
      answers: ["Buenos días", "Buenas noches", "Hola", "Adiós"],
      correct: 3,
    },
    {
      question: "What does 'familia' mean in English?",
      answers: ["Friend", "Family", "Father", "Mother"],
      correct: 1,
    },
  ];

  return (
    <div className="App">
      <Back />
      <h1 className="title">Easy Spanish</h1>
      <Test questions={test} />
    </div>
  );
}
