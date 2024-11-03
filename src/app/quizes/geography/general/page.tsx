import Test from "@/components/test";
import Back from "@/components/back";

export default function General() {
  const test = [
    {
      question: "What is the largest continent by area?",
      answers: ["Africa", "Asia", "Europe", "North America"],
      correct: 1,
    },
    {
      question: "Which ocean is the deepest?",
      answers: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      correct: 2,
    },
    {
      question: "What is the longest river in the world?",
      answers: [
        "Amazon River",
        "Yangtze River",
        "Mississippi River",
        "Nile River",
      ],
      correct: 3,
    },
    {
      question: "Which country has the most islands?",
      answers: ["Indonesia", "Sweden", "Philippines", "Norway"],
      correct: 1,
    },
    {
      question: "What is the highest mountain in the world?",
      answers: ["Mount Kilimanjaro", "K2", "Mount Elbrus", "Mount Everest"],
      correct: 3,
    },
    {
      question: "In which country is the Sahara Desert primarily located?",
      answers: ["Saudi Arabia", "Egypt", "Algeria", "Morocco"],
      correct: 2,
    },
    {
      question: "What is the smallest country in the world?",
      answers: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
      correct: 1,
    },
    {
      question: "Which country has the largest population?",
      answers: ["India", "United States", "China", "Indonesia"],
      correct: 2,
    },
    {
      question: "Which is the largest lake in the world by area?",
      answers: ["Lake Superior", "Lake Victoria", "Caspian Sea", "Lake Huron"],
      correct: 2,
    },
    {
      question: "Which desert is the largest hot desert in the world?",
      answers: [
        "Arabian Desert",
        "Gobi Desert",
        "Sahara Desert",
        "Kalahari Desert",
      ],
      correct: 2,
    },
  ];

  return (
    <div className="App">
      <Back />
      <h1 className="title">General</h1>
      <Test questions={test} />
    </div>
  );
}
