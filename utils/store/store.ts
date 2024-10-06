"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IDispa {
  answers: UserAnswersT[];
  setUserAnswers: (item: QuestionT, val: "Да" | "Нет") => void;
  question: number;
  setNextQuestion: () => void;
}

export type UserAnswersT = QuestionT & { val: "Да" | "Нет" };

export type QuestionT = { name: string; number: number };

export const questions: QuestionT[] = [
  { name: "Болит ли у Вас голова в затылочной области?", number: 1 },
  { name: "Повышается ли у Вас артериальное давление?", number: 2 },
  { name: "Беспокоит ли Вас сухость во рту?", number: 3 },
  {
    name: "Говорил ли Вам врач, что у Вас повышенный уровень сахара?",
    number: 4,
  },
  {
    name: "Говорил ли Вам врач, что у Вас повышенный уровень холестерина?",
    number: 5,
  },
  { name: "Беспокоят ли Вас боли в животе?", number: 6 },
  {
    name: "Похудели ли Вы за последнее время без видимых причин?",
    number: 7,
  },
  {
    name: "Были ли у Ваших близких родственников злокачественные новообразования?",
    number: 8,
  },
  { name: "Встаёте ли Вы ночью в туалет?", number: 9 },
  { name: "Курите ли Вы?", number: 10 },
];

export const useDispaStore = create<IDispa>()(
  persist(
    (set, get) => ({
      answers: [],
      question: 1,
      setUserAnswers: (item, val) => {
        const { answers, setNextQuestion, question } = get();

        if (
          question <= questions.length &&
          answers.length !== questions.length
        ) {
          set(() => ({
            answers: answers.concat({ ...item, val }),
          }));
          if (question < questions.length) {
            setNextQuestion();
          }
        }
      },
      setNextQuestion: () => {
        set((state) => ({
          question: ++state.question,
        }));
      },
    }),
    {
      name: "answers-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
