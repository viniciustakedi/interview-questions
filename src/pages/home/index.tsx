import { useCallback, useEffect, useState } from "react";
import { Button, Container, Content, GenericDiv, PaddingTop, Section, SpanGradient, Title } from "../../assets/styles/styled-components";
import { ScrollIndicator } from "../../components";
import { IquestionsArray, QuestionsRequest } from "../../providers/getQuestions";
import QuestionCards from "./components/question-cards";

import './home.scss';

const GRADIENT = { position: "-45deg", color1: "#c62368", color2: "#fa7268" };

export default function Home() {
    const [questions, setQuestions] = useState<IquestionsArray>([]);

    const getQuestionsCallback = useCallback(async () => {
        const getQuestions = await QuestionsRequest({ take: 6 });
        setQuestions(getQuestions);
    }, []);

    useEffect(() => {
        getQuestionsCallback();
    }, [])

    return (
        <Container className="container-home-background">
            <Content>
                <Section className="initial-content-home">
                    <Title
                        textAlign="center"
                        fontSize="super"
                        fontWeight={900}
                        paddingTop={2}
                        id='title-home'
                    >
                        Interview
                        <SpanGradient gradient={GRADIENT}> Questions</SpanGradient>
                        <SpanGradient gradient={GRADIENT}>.</SpanGradient>
                    </Title>
                    <PaddingTop size={1.5} />
                    <Button tooltip={{ position: "bottom", text: "Ver mais perguntas" }}>Perguntas</Button>
                    <ScrollIndicator />
                </Section>
                <Section>
                    <PaddingTop size={4} />
                    <QuestionCards data={questions} />
                </Section>
            </Content>
        </Container>
    );
}