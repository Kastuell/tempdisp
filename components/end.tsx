"use client";

import { supabase } from "@/utils/supabase/supabase";
import { UserAnswersT } from "./question-wrapper";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useState } from "react";

export const End = () => {
  const { push } = useRouter();

  const params = useSearchParams();

  const [answers, setAnswers] = useState<any[]>([]);

  const [isRendered, setRendered] = useState(false);

  useEffect(() => {
    params.forEach((val) => {
      setAnswers((prev) => prev.concat(val));
    });
    setRendered(true);
  });

  const handleClick = async (answers: UserAnswersT[]) => {
    const { data, error } = await supabase
      .from("opros")
      .insert([{ data: { answers } }])
      .select();

    push("https://er25.ru/#!/record/doctors?spec=36&mo=370");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {isRendered ? (
        <div className="text-center">
          {answers.findIndex((item) => item == "Да") !== -1 ? (
            <div>
              <h1 className="text-5xl font-semibold text-red-600">
                Результаты
              </h1>
              <div className="mt-10 text-xl w-3/5 mx-auto">
                По результатам опроса Вам рекомендуется пройти диспацеризацию.
                <br />
                Чтобы перейти к записи через госулуги нажмите на кнопку
                "Перейти".
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-5xl font-semibold text-green-600">
                Результаты
              </h1>
              <div className="mt-10 text-xl w-3/5 mx-auto">
                По результатам опроса Вы здоровы, но для более точного
                результата, Мы рекомендуем Вам пройти диспацеризацию.
                <br />
                Чтобы перейти к записи через госулуги нажмите на кнопку
                "Перейти".
              </div>
            </div>
          )}

          <button
            className="rounded-xl px-5 py-3 font-medium text-2xl bg-gray-300 hover:opacity-90 transition duration-300 mt-10"
            onClick={() => handleClick([])}
          >
            Перейти
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
