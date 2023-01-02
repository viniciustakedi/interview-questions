import { GenericDiv, Text, QuestionCard, TagText, Tooltip } from "../../../assets/styles/styled-components";
import { useNavigate } from "react-router-dom";
import { IquestionsArray } from "../../../providers/getQuestions";
import "./home-components.scss";

interface IQuestionCard {
    data: IquestionsArray;
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
                        <Text fontSize="default" fontWeight={400}>{e.title}</Text>
                        <GenericDiv alignItems="flex-end" >
                            <TagText>{e.type}</TagText>
                            <GenericDiv alignItems="flex-end" justifyContent="flex-end">
                                {
                                    e.languages.map((i, index) =>
                                        <Tooltip tooltip={{
                                            position: "bottom",
                                            text: i.language,
                                            width: 80,
                                            backgroundColor: '#403b3b',
                                            color: '#fff'
                                        }}>
                                            <img
                                                key={index}
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