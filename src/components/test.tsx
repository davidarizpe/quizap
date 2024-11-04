"use client";
import type { Test } from "@/types/Questions";
import type { Selected } from "@/types/selected";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface TestProps {
  questions: Test[];
}

export default function Test({ questions }: TestProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Selected[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [note, setNote] = useState<string | number>(0);

  const route = useRouter();

  const handleAnswerChange = (question: number, answer: number) => {
    setSelectedAnswers((prev) => {
      const updatedAnswers = prev.filter((item) => item.question !== question);
      return [...updatedAnswers, { question, answer }];
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(selectedAnswers);

    let note = 0;

    questions.forEach((question: Test, index: number) => {
      const selectedAnswer = selectedAnswers.find(
        (item) => item.question === index
      );

      if (selectedAnswer && selectedAnswer.answer === question.correct) {
        note += 1;
      }
    });

    const factor = 10 / questions.length;
    const realnote = (note * factor).toFixed(1);

    setNote(realnote);
    setShowModal(true);
  };

  return (
    <form className="m-5" onSubmit={handleSubmit}>
      <ol type="1">
        {questions.map((question: Test, index: number) => (
          <div key={index} className="m-3">
            <h3 className="font-bold">
              <li style={{ listStyleType: "number" }}>{question.question}</li>
            </h3>
            <ol type="a">
              {question.answers.map((answer, itemIndex: number) => (
                <li key={itemIndex} style={{ listStyleType: "lower-alpha" }}>
                  <input
                    type="radio"
                    className="m-2"
                    name={`question-${index}`}
                    value={answer}
                    onChange={() => handleAnswerChange(index, itemIndex)}
                  />
                  <label>{answer}</label>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </ol>
      <button type="submit" className="btn">
        Submit
      </button>

      {showModal && (
        <div className="modal fixed inset-0 w-full h-full bg-[rgba(0,0,0,0.5)] text-black">
          <div
            className="modal-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-[5rem] px-8
          rounded-2xl shadow-lg flex justify-center items-center flex-col"
          >
            <button
              className="absolute top-0 right-0 m-5 text-3xl cursor-pointer rounded-full transition hover:bg-gray-300 px-2 py-1"
              onClick={() => {
                setShowModal(false);
                route.push("/");
              }}
            >
              x
            </button>
            <h2 className="font-bold text-2xl md:text-3xl m-3">{note}/10</h2>
          </div>
        </div>
      )}
    </form>
  );
}
