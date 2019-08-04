import React from 'react';
import {Container, Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';
import LoopLab from '../assets/LoopLab.png';
import LSG from '../assets/littlespanishgarden.png';
import Network from '../assets/theNetworkTheme.png';


const Styles = styled.div`
.container {
    background-color: #fff;
    height: 500px;
    align-items: center;
    align-text: center;

}

.col-home {
    margin-top: 200px;
    margin-bottom: 160px;
    align-items: center;
}

.col-projects {
    margin-top: 100px;
}

.skills-section{
    height: 800px;
    

}

.col-skills {
    margin-top: 200px;
    align-items: center;
}

.col-devSkills {
    margin-top: 100px;
}

.col-projects {
    margin-top: 60px;
    margin-bottom: 50px;
    margin-right: 40px;
}

.project1{
    background: url(${LoopLab});
    height: 180px;
    width: 171px;
}

.col-proj2 {
    margin-left: 50px;
    margin-right: 20px;
}

.project2 {
    background: url(${LSG});
    height: 180px;
    width: 280px;
}

.col-proj3 {
    margin-right: 10px; 
}

.project3 {
    height: 180px;
    width: 320px; 
}

h3 {
    margin-top: 20px;
}

p {
    margin-top: 20px;
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
            <Col xs={6} md={4}>
               <Image src={LoopLab} thumbnail />
                  <h3>LoopLab Website</h3>
                    <p>Built with HTML, CSS, Javascript, JQuery</p>
                      <p><span><strong>Challenges:</strong></span> Learning
                       CSS overlays, gradients, and animations.</p>
                        <p>Practicing 4-5 hours per day to improve my CSS skills.</p>
            </Col>
               <Col className="col-proj2" xs={6} md={4}>
                  <Image className="project2" src={LSG} thumbnail />
                    <h3>littlespanishgarden</h3>
                      <p>Built with WordPress</p>
                        <p><span><strong>Challenges: </strong></span> 
                            Freelance project for a client that required learning business and finance skills, marketing, and
                            having a follow-up plan.</p>
                
                    </Col>
            <Col className="col-proj3" xs={6} md={4}>
                <Image className="project3" src={Network} thumbnail />
                   <h3>The theNetworkTheme</h3>
                     <p>Created with HTML, CSS, Javascript, Bootstrap and JQuery</p>
                     <p><span><strong>Challenges: </strong></span> 
                            My first Freelance project for a friend that required learning AWS and Bootstrap skills, marketing, and
                            having a follow-up plan.</p>
            </Col>
        </Row>
     </Container>
     
</Styles>

    
) 

export default Home;