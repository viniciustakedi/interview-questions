import { GenericDiv, Text, QuestionCard, TagText, Tooltip } from "../../../assets/styles/styled-components";
import { useNavigate } from "react-router-dom";
import { IQuestionsArray } from "../../../providers/getQuestions";
import "./home-components.scss";
import { ElipseField } from "../../../components";

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
        <div className='question-div'>
            {
                data.flatMap(e =>
                    <QuestionCard key={e.id} onClick={() => handleClick(e.id)}>
                        <Text styleProps={{ fontSize: "default", fontWeight: 400 }}>{e.title}</Text>
                        <GenericDiv styleProps={{ alignItems: "flex-end" }}  >
                            <TagText>
                                <ElipseField amount={10} value={e.type} />
                            </TagText>
                            <GenericDiv styleProps={{ alignItems: "flex-end", justifyContent: "flex-end" }}>
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
                                                src={i.image}
                                                alt={`imagename_${i.image}`}
                                            />
                                        </Tooltip>
                                    )
                                }
                            </GenericDiv>
                        </GenericDiv>
                    </QuestionCard>
                )
            }
        </div>
    );
}

export default QuestionCards;