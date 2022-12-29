import { useCallback, useEffect, useState } from "react";
import { Button, Container, Content, GenericDiv, PaddingTop, Section, Title } from "../../assets/styles/styled-components";
import { IquestionsArray, QuestionsRequest } from "../../providers/getQuestions";
import QuestionCards from "./components/question-cards";

import './home.scss';

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
                <Section>
                    <Title
                        fontSize="super"
                        fontWeight={900}
                        paddingTop={2}
                        id='title-home'
                    >
                        Perguntas que todo 🚀 programador(a) deve saber...
                    </Title>
                    <PaddingTop size={4} />
                    {/* Varios cards, deixar somente uns seis display: grid */}
                    {/* Fazer cards para ficar as perguntas, imagem, título, linguagem/imagem e tipo */}
                    <QuestionCards data={questions} />
                    <PaddingTop size={4} />
                    <GenericDiv alignItems="flex-end" justifyContent="center">
                        <Button>Ver mais...</Button>
                    </GenericDiv>
                </Section>
            </Content>
        </Container>
    );
}