import React, { useContext } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { GenericDiv } from "../../../assets/styles/styled-components";
import { QuestionsContext } from "../../../contexts/questions";
import { QuestionsRequest } from "../../../providers/getQuestions";

interface IFilters {
    source: string,
    children: React.ReactNode;
}

export const Filters: React.FC<IFilters> = ({ children, source }) => {
    console.log("🚀 ~ file: filters-questions.tsx:15 ~ children", children)
    const [filters, setFilters] = useState([]);
    const { questions, setQuestions } = useContext(QuestionsContext)

    const getQuestionWithFilter = useCallback(async () => {
        if (source === 'questions') {
            const getQuestions = await QuestionsRequest({ take: 15, filter: filters });
            setQuestions(getQuestions);
        }
    }, [])

    useEffect(() => {
        getQuestionWithFilter();
    }, []);


    return (
        <GenericDiv styleProps={{ marginBottom: 1 }}>
            {children}
        </GenericDiv>
    );
}

