import Test from "@/components/test";
import Back from "@/components/back";

export default function Hard() {
  const test = [
    {
      question:
        "What is the chemical symbol for the element with atomic number 74?",
      answers: ["W", "Hf", "Mo", "Ta"],
      correct: 0,
    },
    {
      question: "Which country was known as Persia until 1935?",
      answers: ["Iraq", "Iran", "Syria", "Lebanon"],
      correct: 1,
    },
    {
      question: "Who is the author of the epic poem 'Paradise Lost'?",
      answers: [
        "John Milton",
        "Geoffrey Chaucer",
        "William Blake",
        "Edmund Spenser",
      ],
      correct: 0,
    },
    {
      question: "What is the only mammal capable of true flight?",
      answers: ["Flying squirrel", "Bat", "Flying lemur", "Bird"],
      correct: 1,
    },
    {
      question: "What is the oldest written language that has been deciphered?",
      answers: ["Latin", "Sanskrit", "Cuneiform", "Hieroglyphics"],
      correct: 2,
    },
    {
      question: "In which year did the Chernobyl nuclear disaster occur?",
      answers: ["1984", "1986", "1988", "1990"],
      correct: 1,
    },
    {
      question: "What is the name of the largest moon of Saturn?",
      answers: ["Europa", "Ganymede", "Titan", "Callisto"],
      correct: 2,
    },
    {
      question:
        "Who formulated the theory of electromagnetism in the 19th century?",
      answers: [
        "Isaac Newton",
        "Nikola Tesla",
        "James Clerk Maxwell",
        "Albert Einstein",
      ],
      correct: 2,
    },
    {
      question: "What is the most abundant gas in Earth's atmosphere?",
      answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
      correct: 1,
    },
  ];

  return (
    <div className="App">
      <Back />
      <h1 className="title">General Culture hard</h1>
      <Test questions={test} />
    </div>
  );
}
