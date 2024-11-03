import Test from "@/components/test";
import Back from "@/components/back";

export default function Easy() {
  const test = [
    {
      question: "How do you say 'dog' in Italian?",
      answers: ["Gatto", "Cane", "Uccello", "Topo"],
      correct: 1,
    },
    {
      question: "What is the Italian word for 'please'?",
      answers: ["Grazie", "Per favore", "Ciao", "Arrivederci"],
      correct: 1,
    },
    {
      question: "What is the plural form of 'ragazza' (girl) in Italian?",
      answers: ["Ragazze", "Ragazzi", "Ragazzini", "Ragazzee"],
      correct: 0,
    },
    {
      question: "How do you say 'Good evening' in Italian?",
      answers: ["Buongiorno", "Buonasera", "Buonanotte", "Ciao"],
      correct: 1,
    },
    {
      question: "What does 'casa' mean in English?",
      answers: ["Car", "House", "Tree", "School"],
      correct: 1,
    },
  ];

  return (
    <div className="App">
      <Back />
      <h1 className="title">Easy italian</h1>
      <Test questions={test} />
    </div>
  );
}
