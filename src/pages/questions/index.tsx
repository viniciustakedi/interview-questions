import { useContext, useEffect } from "react";
import { Container, Content, SpanGradient, Title } from "../../assets/styles/styled-components";
import { SearchInput } from "../../components";
import { QuestionsContext } from "../../contexts/questions";
import { Filters } from "./components/filters-questions";
import QuestionCards from "./components/question-cards";
import './questions.scss';

function Questions() {
    const GRADIENT = { position: "-45deg", color1: "#c62368", color2: "#fa7268" };
    const { questions, setQuestions } = useContext(QuestionsContext)

    return (
        <Container className="container-questions-background">
            <Content className="content-questions-background">
                <Title
                    id="title-questions"
                    styleProps={{
                        fontSize: "big",
                        fontWeight: 900,
                        lineHeight: 50,
                        paddingBottom: 1,
                        paddingTop: 1
                    }}
                >
                    Últimas <SpanGradient gradient={GRADIENT}>peguntas</SpanGradient>
                    <SpanGradient gradient={GRADIENT}>:</SpanGradient>
                </Title>
                {/* FAZER OS FILTROS FUNCIONAREM */}
                <Filters source="questions"> 
                    <SearchInput
                        id="search"
                        type="text"
                        placeholder="Pesquisar..."
                    />
                </Filters>
                {(questions &&
                    <QuestionCards data={questions} />
                )}
            </Content>
        </Container>
    );
}

export default Questions;