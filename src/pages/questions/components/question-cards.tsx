import {
    GenericDiv,
    Title,
    QuestionCardList,
    TagText,
    Tooltip,
    Text,
    Image
} from "../../../assets/styles/styled-components";
import { ElipseField } from "../../../components";
import { useNavigate } from "react-router-dom";
import { IQuestionsArray } from "../../../providers/getQuestions";
import "./home-components.scss";

interface IQuestionCard {
    data: IQuestionsArray;
}

const QuestionCards: React.FC<IQuestionCard> = ({ data }) => {
    const navigate = useNavigate();

    const handleClick = (id: number) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        navigate(`/question-view/${id}`);
    }

    return (
        <div className='question-div-questions'>
            {
                data.flatMap(e =>
                    // <QuestionCardList key={e.id} >
                    <QuestionCardList className="question-card-list" key={e.id}>
                        <GenericDiv className="div-onclick" styleProps={{ justifyContent: "space-between", flexDirection: "column" }} onClick={() => handleClick(e.id)}>
                            <GenericDiv>
                                <Text
                                    id="question-createat"
                                    styleProps={{ fontSize: "small" }}
                                    tooltip={{
                                        position: "right",
                                        top: -90,
                                        text: "Criado em",
                                    }}
                                >
                                    {e.createdAt}
                                </Text>
                            </GenericDiv>
                            <GenericDiv styleProps={{ justifyContent: "space-between" }}>
                                <GenericDiv styleProps={{ flexDirection: "column" }}>
                                    <Title
                                        id="question-title"
                                        styleProps={{
                                            fontSize: "small",
                                            fontWeight: 800,
                                            lineHeight: 40
                                        }}>
                                        <ElipseField amount={51} value={e.title} />
                                    </Title>
                                    <Text id="question-resume" styleProps={{ fontSize: "SM", width: 95 }} >
                                        <ElipseField amount={130} value={e.resume} />
                                    </Text>
                                </GenericDiv>
                                <GenericDiv styleProps={{ justifyContent: "flex-end", width: 32 }}>
                                    <Image id="banner-card" src={e.imageUrl} />
                                </GenericDiv>
                            </GenericDiv>
                        </GenericDiv>
                        <GenericDiv>
                            <GenericDiv styleProps={{ alignItems: "flex-end", width: 70 }}>
                                <TagText id="tag-text">
                                    <ElipseField amount={12} value={e.type} />
                                </TagText>
                                <Text
                                    id="time-read"
                                    styleProps={{
                                        fontSize: 'small',
                                        paddingLeft: 1,
                                        color: '#7a7474',
                                        width: 40
                                    }}>
                                    {e.timeToRead} min leitura
                                </Text>
                            </GenericDiv>
                            <GenericDiv styleProps={{ alignItems: "flex-end", justifyContent: "flex-end", width: 30 }} >
                                {
                                    e.languages.map((i, index) =>
                                        <Tooltip
                                            key={index}
                                            tooltip={{
                                                position: "bottom",
                                                text: i.language,
                                                width: 80,
                                                backgroundColor: '#403b3b',
                                                color: '#fff'
                                            }}>
                                            <img
                                                id="icon-tec"
                                                src={i.image}
                                                alt={`imagename_${i.image}`}
                                            />
                                        </Tooltip>
                                    )
                                }
                            </GenericDiv>
                        </GenericDiv>
                    </QuestionCardList>
                )
            }
        </div>
    );
}

export default QuestionCards;