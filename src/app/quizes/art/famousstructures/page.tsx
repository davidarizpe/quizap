import Test from "@/components/test";
import Back from "@/components/back";

export default function FamousStructures() {
  const test = [
    {
      question: "Who designed the Eiffel Tower?",
      answers: [
        "Gustave Eiffel",
        "Frank Lloyd Wright",
        "Le Corbusier",
        "Louis Kahn",
      ],
      answer: 0,
    },
    {
      question: "What year was the Great Wall of China completed?",
      answers: ["221 BC", "1368 AD", "1644 AD", "1912 AD"],
      answer: 1,
    },
    {
      question: "Where is the Colosseum located?",
      answers: ["Greece", "France", "Italy", "Spain"],
      answer: 2,
    },
    {
      question: "What is the tallest building in the world?",
      answers: [
        "Burj Khalifa",
        "Shanghai Tower",
        "One World Trade Center",
        "Taipei 101",
      ],
      answer: 0,
    },
    {
      question: "Who designed the Sydney Opera House?",
      answers: ["Jørn Utzon", "Renzo Piano", "Frank Gehry", "Zaha Hadid"],
      answer: 0,
    },
  ];

  return (
    <div className="App">
      <Back />
      <h1 className="title">Famous Structures</h1>
      <Test questions={test} />
    </div>
  );
}
