import React, { useContext } from "react";
import { Container, Content, Title } from "../../assets/styles/styled-components";

import './not-found.scss'

import NotFoundImage from '../../assets/images/storysets/404 Error-amico.png';

function NotFound() {
    return (
        <Container>
            <Content className="notFoundContent">
                <img src={NotFoundImage} alt="not_found_image" />
                <Title
                    id="title"
                    fontSize="small"
                    fontWeight={200}
                    opacity={0.5}
                >
                    Opss... Página não encontrada!
                </Title>
            </Content>
        </Container>
    );
}

export default NotFound;