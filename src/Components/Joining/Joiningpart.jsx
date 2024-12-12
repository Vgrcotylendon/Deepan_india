import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Cardimg1 from '../../assets/cardimgs/card1.jpg'

export default function Joiningpart() {
  return (
    <Maindiv>
        <Container>
            <Row>
                <Col md={7}>
                    <Joincontent>
                        <h1>Join us to enable #FutureReadyHealthcare</h1>
                        <Joinbtns>
                          <a href="#"><div>What We value</div></a>
                          <a href="#"><div> Opportunities</div></a>
                        </Joinbtns>
                    </Joincontent>
                </Col>
                <Col md={5}>
                    
                </Col>
            </Row>
        </Container>
    </Maindiv>
  )
}
const Maindiv = styled.section`
     padding: 85px 0;
    background: linear-gradient(90deg, rgb(250 0 1 / 26%) 1%, rgb(0 0 0 / 52%) 54%, rgb(7 49 159 / 18%) 97%), url(${Cardimg1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 70vh;
    display: flex;
    align-items: center;
    transition: 0.6s ease-in-out;
`;
const Joincontent = styled.div`

h1{
    color: #fff;
    font-size: 4rem;
    font-weight: 700;
    padding: 10px 0;
    margin: 0 0 15px 0;

    @media screen and (max-width: 600px){
       font-size: 1.8rem;
    }
         @media (min-width: 768px) and (max-width: 1024px) {
  font-size: 1.6em;
  
}
}
  
`;
const Joinbtns = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 600px){
       display: block;
    }
  div {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 15px 10px;
    border: 1px solid;
    margin: 10px 15px;
    text-align: center;
    width: 20rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover{
      background-color: red;
      border: 1px solid red;
    }

     @media screen and (max-width: 600px){
    font-size: 1.1rem;
    padding: 15px 10px;
    margin: 10px 5px;
    width: 15em;
    }
}
`;