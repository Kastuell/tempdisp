"use client";

import { useEffect, useState } from "react";
import { Question } from "./question";
import { useRouter } from "next/navigation";

type QuestionT = { name: string; number: number };

export type UserAnswersT = { name: string; answer: string; number: number };

export const QuestionWrapper = () => {
  const { push } = useRouter();
  const questions: QuestionT[] = [
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

  const [curQuestion, setCurQuestion] = useState<QuestionT>(questions[0]);

  const [userAnswers, setUserAnswers] = useState<UserAnswersT[]>([]);

  // const pushToEndPage = () => {
  //   if (
  //     userAnswers.length > 1 &&
  //     userAnswers[userAnswers.length - 1].number ==
  //       questions[questions.length - 1].number
  //   ) {
  //     let qwe = "";
  //     for (let i = 0; i < userAnswers.length - 1; i++) {
  //       qwe = qwe + `${userAnswers[i].number}=${userAnswers[i].answer}`;
  //     }
  //     console.log(qwe);
  //     // push(`/end?${}`);
  //   }
  // };

  useEffect(() => {
    if (userAnswers.length == 10) {
      let qwe = "";
      for (let i = 0; i < userAnswers.length; i++) {
        qwe =
          qwe +
          `${userAnswers[i].number}=${userAnswers[i].answer}&`;
      }
      push(`/end?${qwe}`);
    }
  }, [userAnswers]);

  const addNewAnswers = (value: UserAnswersT) => {
    if (userAnswers.findIndex((item) => item.number == value.number) == -1) {
      setUserAnswers(userAnswers.concat(value));
    }
  };

  const nextQuestion = (value: UserAnswersT) => {
    addNewAnswers(value);
    if (value.number !== questions[questions.length - 1].number) {
      setCurQuestion(questions[curQuestion.number]);
    }
  };

  return (
    <Question
      number={curQuestion.number}
      name={curQuestion.name}
      nextQuestion={nextQuestion}
    />
  );
};
