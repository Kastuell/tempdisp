"use client";

import { UserAnswersT } from "./question-wrapper";

interface IQuestion {
  nextQuestion: (value: UserAnswersT) => void;
  name: string;
  number: number;
}

export const Question = (props: IQuestion) => {
  const handleClick = (type: "Да" | "Нет") =>
    props.nextQuestion({
      name: props.name,
      answer: type,
      number: props.number,
    });
  return (
    <div>
      <h2 className="font-bold text-xl xl:text-3xl text-center xl:w-1/2 mx-auto h-16">
        {props.number}. {props.name}
      </h2>
      <div className="flex justify-center mt-10">
        <div className="space-y-5">
          <div className="flex gap-3 items-center">
            <div className="size-4 rounded-full bg-sky-500" />

            <button
              className="text-black text-xl hover:cursor-pointer  hover:underline"
              onClick={() => handleClick("Да")}
            >
              Да
            </button>
          </div>
          <div className="flex gap-3 items-center">
            <div className="size-4 rounded-full bg-sky-500" />
            <button
              className="text-black text-xl hover:cursor-pointer  hover:underline"
              onClick={() => handleClick("Нет")}
            >
              Нет
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
