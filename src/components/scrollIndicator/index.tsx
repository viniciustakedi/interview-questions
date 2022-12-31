import { BsFillMouseFill } from "react-icons/bs";
import { GenericDiv, Tooltip } from "../../assets/styles/styled-components";
import './scroll-indicator.scss';

const ScrollIndicator = () => {


    return (
        <GenericDiv height={10} className="scroll-indicator" justifyContent="flex-end" alignItems="center" flexDirection="column">
            <Tooltip tooltip={{ position: 'left', text: "Role para baixo", backgroundColor: "#002440", color: "#fff" }}>
                <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <BsFillMouseFill size="24px" color="#002440" id="mouse-icon-scroll" />
            </Tooltip>
        </GenericDiv>
    );
}

export default ScrollIndicator;