import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
.container {
    background-color: #fff;
    height: 500px;
    align-items: center;
    
}

.col-home {
    margin-top: 200px;
    align-items: center;
}

.col-projects {
    margin-top: 100px;
}
`;

export const Home = () => (
    <Styles>
    <Container>
        <Row>
            <Col className="col-home">
            <h2>Projects I've Worked On</h2>
            <p>Everything is solvable, nothing I can't handle.  Hitting the ground running is what I'm good at.</p>
            </Col>
        </Row>
        <Row className="col-projects">
            <Col>Project1</Col>
            <Col>Project2</Col>
            <Col>Project3</Col>
        </Row>
     </Container>
     </Styles>
    
) 

export default Home;