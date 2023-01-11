import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Content, PaddingTop, Section, SpanGradient, Title } from "../../assets/styles/styled-components";
import { ScrollIndicator } from "../../components";
import { QuestionsContext } from "../../contexts/questions";
import QuestionCards from "./components/question-cards";
import './home.scss';


export default function Home() {
    const { questions, setQuestions } = useContext(QuestionsContext)
    const GRADIENT = { position: "-45deg", color1: "#c62368", color2: "#fa7268" };
    const navigate = useNavigate();

    return (
        <Container className="container-home-background">
            <Content>
                <Section className="initial-content-home">
                    <Title
                        id='title-home'
                        styleProps={{
                            textAlign: "center",
                            fontSize: "super",
                            fontWeight: 900,
                            paddingTop: 2,
                        }}
                    >
                        Interview
                        <SpanGradient gradient={GRADIENT}> Questions</SpanGradient>
                        <SpanGradient gradient={GRADIENT}>.</SpanGradient>
                    </Title>
                    <PaddingTop size={1.5} />
                    <Button tooltip={{ position: "bottom", text: "Ver mais perguntas" }} onClick={() => navigate("/questions")}>Perguntas</Button>
                    <ScrollIndicator />
                </Section>
                <Section>
                    <PaddingTop size={4} />
                    {(questions &&
                        <QuestionCards data={questions.slice(0, 6)} />
                    )}
                </Section>
            </Content>
        </Container>
    );
}