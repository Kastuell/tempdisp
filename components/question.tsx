"use client";

import { questions, useDispaStore } from "@/utils/store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const Question = () => {
  const { setUserAnswers, question, answers } = useDispaStore();

  const { push } = useRouter();

  useEffect(() => {
    if (answers.length == 10) push("/end");
  }, [answers]);

  return (
    <div>
      <h2 className="font-bold text-xl xl:text-3xl text-center xl:w-1/2 mx-auto h-16">
        {questions[question - 1].number}. {questions[question - 1].name}
      </h2>
      <div className="flex justify-center mt-10">
        <div className="space-y-5">
          <div className="flex gap-3 items-center">
            <div className="size-4 rounded-full bg-sky-500" />

            <button
              className="text-black text-xl hover:cursor-pointer  hover:underline"
              onClick={() => setUserAnswers(questions[question - 1], "Да")}
            >
              Да
            </button>
          </div>
          <div className="flex gap-3 items-center">
            <div className="size-4 rounded-full bg-sky-500" />
            <button
              className="text-black text-xl hover:cursor-pointer  hover:underline"
              onClick={() => setUserAnswers(questions[question - 1], "Нет")}
            >
              Нет
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
