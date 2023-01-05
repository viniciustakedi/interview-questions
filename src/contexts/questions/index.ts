import { IQuestionsArray } from './../../providers/getQuestions';
import { createContext } from "react";

const QuestionsArray: IQuestionsArray | null = [];

export const QuestionsContext = createContext({
    questions: QuestionsArray,
    setQuestions: (questions: IQuestionsArray | null) => { }
});


