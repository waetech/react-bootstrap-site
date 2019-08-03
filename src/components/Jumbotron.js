import React from 'react';
import { Jumbotron as Jumbo, Container, Button, ButtonToolbar } from 'react-bootstrap';
import styled from 'styled-components';
import codeImage from '../assets/code.jpg';

const Styles = styled.div`
.jumbo {
    background: url(${codeImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 100vh;
    position: reltive;
    z-index: -2;
}

.overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}

.title {
    margin-top: 300px;
}

button {
    margin: 5px 5px;
    padding: 10px 5px;
}
`;

export const Jumbotron = () => (
  <Styles>
      <Jumbo fluid className="jumbo">
          <div className="overlay"></div>
          <Container>
              <h1 className="title">Need a Project Done Yesterday?</h1>
              <p>I create world class experiences for the right company that's willing to be successful.</p>
            <ButtonToolbar>
                <Button variant="outline-light" href="#">Download Resume</Button>
                <Button variant="outline-info" href="#">View Projects</Button>
            </ButtonToolbar>
          </Container>
      </Jumbo>
  </Styles>
)




export default Jumbotron;