import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import Cardimg1 from '../../assets/cardimgs/card1.jpg'
import Cards from './Cards';


export default function Cardpart() {
  return (
    <Maindiv>
        <Container>
            <Row>
                <Col md={12}>
                    <Heading>What's New</Heading>
                </Col>
            </Row> 
    <Carousel >
      <Carousel.Item>
        <Row>
        <Col sm={12} xs={12} md={4} lg={4} xl={4}>
            <a href="#">
                <Cards cardImg={Cardimg1} cardTitle="News | Medical Affairs"  cardText="  Scrip Story: How to Speed Up MLR Reviews" />
            </a>
        </Col> 
        <Col sm={12} xs={12} md={4} lg={4} xl={4}>
            <a href="#">
                <Cards cardImg={Cardimg1} cardTitle="News | Technology"  cardText=" Join us to enable #FutureReadyHealthcare" />
            </a>
        </Col> 
        <Col sm={12} xs={12} md={4} lg={4} xl={4}>
            <a href="#">
                <Cards cardImg={Cardimg1} cardTitle="News | Medical Code"  cardText=" advanced social media analytics" />
            </a>
        </Col>    
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
        <Col sm={12} xs={12} md={4} lg={4} xl={4}>
            <a href="#">
                <Cards cardImg={Cardimg1} cardTitle="Case Study | Analytics"  cardText=" Leading pharma improves speed to insights by 60% with " />
            </a>
        </Col> 
        <Col sm={12} xs={12} md={4} lg={4} xl={4}>
            <a href="#">
                <Cards cardImg={Cardimg1} cardTitle="News | Medical Affairs"  cardText="  Scrip Story: How to Speed Up MLR Reviews" />
            </a>
        </Col> 
        <Col sm={12} xs={12} md={4} lg={4} xl={4}>
            <a href="#">
                <Cards cardImg={Cardimg1} cardTitle="News | Medical Affairs"  cardText="  Scrip Story: How to Speed Up MLR Reviews" />
            </a>
        </Col>    
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
        <Col sm={12} xs={12} md={4} lg={4} xl={4}>
            <a href="#">
                <Cards cardImg={Cardimg1} cardTitle="News | Medical Affairs"  cardText="  Scrip Story: How to Speed Up MLR Reviews" />
            </a>
        </Col> 
        <Col sm={12} xs={12} md={4} lg={4} xl={4}>
            <a href="#">
                <Cards cardImg={Cardimg1} cardTitle="News | Medical Affairs"  cardText="  Scrip Story: How to Speed Up MLR Reviews" />
            </a>
        </Col> 
        <Col sm={12} xs={12} md={4} lg={4} xl={4}>
            <a href="#">
                <Cards cardImg={Cardimg1} cardTitle="News | Medical Affairs"  cardText="  Scrip Story: How to Speed Up MLR Reviews" />
            </a>
        </Col>    
        </Row>
      </Carousel.Item>
    </Carousel>
                
        </Container>
    </Maindiv>
  )
}
const Maindiv = styled.section`
  padding: 75px 0;
  .carousel-control-prev, .carousel-control-next{
    opacity: 0;
  }
   .carousel-indicators {
        bottom: -55px;
    z-index: -1;
}
    .carousel-indicators [data-bs-target] {
    width: 40px;
    height: 6px;
    background-color: #0539a5;
}
`;
const Heading = styled.h1`
    padding: 10px 0
    font-size: 18px;
    font-weight: 900;
    `;
