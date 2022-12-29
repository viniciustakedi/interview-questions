import { GenericDiv, Title, Text, QuestionCard, TagText } from "../../../assets/styles/styled-components";
import { useNavigate } from "react-router-dom";
import { IquestionsArray } from "../../../providers/getQuestions";
import "./home-components.scss";

interface IQuestionCard {
    data: IquestionsArray;
}

const QuestionCards: React.FC<IQuestionCard> = ({ data }) => {
    const navigate = useNavigate();

    return (
        <div className='question-div'>
            {
                data.flatMap(e =>
                    <QuestionCard key={e.id} onClick={() => navigate(`/question-view/${e.id}`)}>
                        <Text fontSize="default" fontWeight={400}>{e.title}</Text>
                        <GenericDiv alignItems="flex-end" >
                            <TagText>{e.type}</TagText>
                            <GenericDiv alignItems="flex-end" justifyContent="flex-end">
                                {
                                    e.languages.map((i, index) =>
                                        <img
                                            key={index}
                                            src={i.image}
                                            alt={`imagename_${i.image}`}
                                            title={i.language}
                                        />
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