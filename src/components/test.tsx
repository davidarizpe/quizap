"use client";
import type { Test } from "@/types/Questions";

export default function Test({ questions }: Test[]) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Submitted");
  };

  return (
    <form className="m-5" onSubmit={handleSubmit}>
      {questions.map((question: Test, index: number) => (
        <div key={index} className="m-3">
          <h3 className="font-bold">{question.question}</h3>
          <ol type="a">
            {question.answers.map((answer, index) => (
              <li key={index} style={{ listStyleType: "lower-alpha" }}>
                <input
                  type="radio"
                  className="m-2"
                  name={question.question}
                  value={answer}
                />
                <label>{answer}</label>
              </li>
            ))}
          </ol>
        </div>
      ))}
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
}
