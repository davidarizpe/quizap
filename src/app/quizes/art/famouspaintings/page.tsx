import Test from "@/components/test";
import Back from "@/components/back";

export default function FamousPaintings() {
  const test = [
    {
      question: "Who painted the Mona Lisa?",
      answers: [
        "Vincent van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Claude Monet",
      ],
      correct: 2,
    },
    {
      question: "What year was 'The Last Supper' completed?",
      answers: ["1498", "1512", "1480", "1503"],
      correct: 0,
    },
    {
      question: "Where is 'Starry Night' located?",
      answers: [
        "Louvre Museum",
        "Museum of Modern Art, New York",
        "Uffizi Gallery",
        "Prado Museum",
      ],
      correct: 1,
    },
    {
      question: "Who is the author of 'The Scream'?",
      answers: [
        "Edvard Munch",
        "Salvador Dalí",
        "Henri Matisse",
        "Jackson Pollock",
      ],
      correct: 0,
    },
    {
      question: "What year was 'The Creation of Adam' completed?",
      answers: ["1508", "1512", "1492", "1485"],
      correct: 1,
    },
  ];

  return (
    <div className="App">
      <Back />
      <h1 className="title">Famous Paintings</h1>
      <Test questions={test} />
    </div>
  );
}
