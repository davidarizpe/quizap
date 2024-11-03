import Test from "@/components/test";
import Back from "@/components/back";

export default function Geometry() {
  const test = [
    {
      question: "What is the sum of the interior angles of a triangle?",
      answers: ["90°", "180°", "270°", "360°"],
      correct: 1,
    },
    {
      question:
        "A rectangle has a length of 8 cm and a width of 4 cm. What is its area?",
      answers: ["24 cm²", "12 cm²", "16 cm²", "32 cm²"],
      correct: 3,
    },
    {
      question: "What is the value of π (pi) rounded to two decimal places?",
      answers: ["3.14", "3.15", "3.12", "3.10"],
      correct: 0,
    },
    {
      question:
        "What is the area of a circle with a radius of 3 cm? (Use π ≈ 3.14)",
      answers: ["28.26 cm²", "18.84 cm²", "20.5 cm²", "25.12 cm²"],
      correct: 0,
    },
    {
      question:
        "In a right triangle, if one angle is 30°, what is the measure of the other non-right angle?",
      answers: ["30°", "45°", "60°", "90°"],
      correct: 2,
    },
    {
      question: "What is the perimeter of a square with side length 5 cm?",
      answers: ["10 cm", "15 cm", "20 cm", "25 cm"],
      correct: 2,
    },
    {
      question:
        "A triangle has sides of length 3 cm, 4 cm, and 5 cm. What type of triangle is this?",
      answers: ["Equilateral", "Isosceles", "Scalene", "Right triangle"],
      correct: 3,
    },
    {
      question: "How many diagonals does a pentagon have?",
      answers: ["5", "10", "3", "7"],
      correct: 3,
    },
    {
      question:
        "The area of a parallelogram is 24 cm² and its base is 6 cm. What is its height?",
      answers: ["6 cm", "4 cm", "5 cm", "3 cm"],
      correct: 1,
    },
    {
      question: "What is the name of a polygon with 8 sides?",
      answers: ["Hexagon", "Octagon", "Nonagon", "Heptagon"],
      correct: 1,
    },
  ];

  return (
    <div className="App">
      <Back />
      <h1 className="title">Geometry</h1>
      <Test questions={test} />
    </div>
  );
}
