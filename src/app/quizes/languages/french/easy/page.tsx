import Test from "@/components/test";
import Back from "@/components/back";

export default function Easy() {
  const test = [
    {
      question: "How do you say 'cat' in French?",
      answers: ["Chien", "Chat", "Oiseau", "Souris"],
      correct: 1,
    },
    {
      question: "What is the French word for 'please'?",
      answers: ["Merci", "S'il vous plaît", "Bonjour", "Au revoir"],
      correct: 1,
    },
    {
      question: "What is the plural form of 'fille' (girl) in French?",
      answers: ["Filles", "Fille", "Fillesse", "Filleses"],
      correct: 0,
    },
    {
      question: "How do you say 'Good evening' in French?",
      answers: ["Bonsoir", "Bonjour", "Bonne nuit", "Salut"],
      correct: 0,
    },
    {
      question: "What does 'maison' mean in English?",
      answers: ["Car", "House", "Tree", "School"],
      correct: 1,
    },
  ];

  return (
    <div className="App">
      <Back />
      <h1 className="title">Easy french</h1>
      <Test questions={test} />
    </div>
  );
}
