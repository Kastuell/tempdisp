"use client";

import { useRouter } from "next/navigation";
import { Question } from "./question";


export const QuestionWrapper = () => {
  const { push } = useRouter();
  
  return (
    <Question/>
  );
};
