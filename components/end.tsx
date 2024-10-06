"use client";

import { questions, useDispaStore, UserAnswersT } from "@/utils/store/store";
import { supabase } from "@/utils/supabase/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const End = () => {
  const { push } = useRouter();

  const { answers } = useDispaStore();

  const temp = answers[answers.findIndex((item) => item.val == "Да")];

  const [txt, setTxt] = useState<string>();

  useEffect(() => {
    if (temp) {
      switch (temp.name) {
        case questions[0].name:
          setTxt(
            "Вам необходимо обратиться в поликлинику, пройти диспансеризацию с целью выявления  повышенного артериального давления, риска развития Артериальной Гипертензии факторов риска приводящих к ней."
          );
          break;
        case questions[1].name:
          setTxt(
            "Вам необходимо обратиться в поликлинику, пройти диспансеризацию с целью выявления  Артериальной Гипертензии, факторов риска приводящих к ней."
          );
          break;
        case questions[2].name:
          setTxt(
            "Вам необходимо обратиться в поликлинику, пройти диспансеризацию с целью диагностики  повышенного содержания глюкозы в крови, риска развития Сахарного диабета."
          );
          break;
        case questions[3].name:
          setTxt(
            "Вам необходимо обратиться в поликлинику, пройти диспансеризацию с целью диагностики  риска развития Сахарного диабета"
          );
          break;
        case questions[4].name:
          setTxt(
            "Вам необходимо обратиться в поликлинику, пройти диспансеризацию с целью контроля исследования  холестерина крови и профилактики заболеваний, которые развиваются при повышенном уровне холестерина в крови."
          );
          break;
        case questions[5].name:
          setTxt(
            "Вам необходимо обратиться в поликлинику, пройти диспансеризацию с целью установления причины возникновения боли, уточнения диагноза."
          );
          break;
        case questions[6].name:
          setTxt(
            "Вам необходимо обратиться в поликлинику, пройти диспансеризацию с целью исключения риска развития онкологического заболевания."
          );
          break;
        case questions[7].name:
          setTxt(
            "Вам необходимо обратиться в поликлинику, пройти диспансеризацию с целью исключения риска развития онкологического заболевания."
          );
          break;
        case questions[8].name:
          setTxt(
            "Вам необходимо обратиться в поликлинику, пройти диспансеризацию с целью диагностики заболеваний мочевыделительной системы."
          );
          break;
        case questions[9].name:
          setTxt(
            "Вам необходимо обратиться в поликлинику, пройти диспансеризацию с целью посещения школы здоровья по отказу от курения, профилактики развития бронхо-легочных заболеваний."
          );
          break;
      }
    }
  }, [temp]);

  const handleClick = async (answers: UserAnswersT[]) => {
    const { data, error } = await supabase
      .from("opros")
      .insert([{ data: { answers } }])
      .select();

    push("https://er25.ru/#!/record/doctors?spec=36&mo=370");
  };

  return (
    <div className="flex justify-center items-center h-screen font-sans">
      <div className="text-center">
        <div>
          <h1 className="text-5xl font-bold">Результаты</h1>
          <div className="mt-10 text-2xl w-full md:w-1/2 mx-auto">
            {txt ?? (
              <span>
                По результатам опроса вы здоровы, но Мы всё равно рекомендуем
                пройти Вам диспанцеризацию!
              </span>
            )}
          </div>
        </div>
        <button
          className="rounded-xl px-5 py-3 font-medium text-2xl bg-gray-300 hover:opacity-90 transition duration-300 mt-10"
          onClick={() => handleClick(answers)}
        >
          Перейти
        </button>
      </div>
    </div>
  );
};
