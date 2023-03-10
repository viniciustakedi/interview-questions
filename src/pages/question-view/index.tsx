import { useCallback, useEffect, useState } from "react";
import { Container, Content, GenericDiv, Image, Title } from "../../assets/styles/styled-components";
import { GetQuestionById, IQuestionsType } from "../../providers/getQuestions";
import DOMPurify from 'isomorphic-dompurify';
import { useParams } from "react-router-dom";
import './question-view.scss'
import ScrollButton from "../../components/scrollButton";

function QuestionView() {
    const [question, setQuestion] = useState<IQuestionsType>()
    const [answer, setAnswer] = useState("");
    const { questionId } = useParams();

    const getQuestionById = useCallback(async () => {
        const id = Number(questionId) as number;
        const question = await GetQuestionById(id);

        const cleanHtml = DOMPurify.sanitize(question?.answer as string)

        setAnswer(cleanHtml);
        setQuestion(question);
    }, [questionId])


    useEffect(() => {
        getQuestionById();
    }, [])

    return (
        <Container className="container-question-background">
            <Content width={65} padding={3} className="content-question">
                <GenericDiv className="question">
                    <Title className="title" styleProps={{ weight: 900, color: "#fff" }} >{question?.title}</Title>
                    <Image height={25} src={question?.imageUrl} alt={`image-alt-${question?.imageUrl}`} />
                </GenericDiv>
                <GenericDiv
                    className="answer-question"
                    styleProps={{
                        flexDirection: "column",
                        marginTop: 2
                    }}
                    dangerouslySetInnerHTML={{ __html: answer }}
                />
                <ScrollButton />
            </Content>
        </Container>
    );
}

export default QuestionView;