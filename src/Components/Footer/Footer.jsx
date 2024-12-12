import React from 'react'
import styled from 'styled-components'
import { Container,Row,Col } from 'react-bootstrap';
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



export default function Footer() {
  return (
    <Footermain>
        <Container>
            <Row>
                <Col md= {3} lg={3} xl={3} xs={12}>
                    <Foottitle>Who We Serve</Foottitle>
                    <Links>
                        <li>Biopharmaceuticals</li>
                        <li>Emerging Biotech</li>
                        <li>Medical Devices</li>
                    </Links>
                </Col>
                <Col md= {3} lg={3} xl={3} xs={12}>
                    <Foottitle>What We Do</Foottitle>
                    <Links>
                        <li>Enterprise Commercial Solutions</li>
                        <li>Enterprise Medical Solutions</li>
                        <li>Enterprise Clinical Solutions</li>
                        <li>Omnichannel Activation Solutions</li>
                        <li>Generative AI-Powered Commercialization</li>
                        <li>Connected Commercial</li>
                        <li>Connected Content Ecosystemx</li>
                        <li>Connected Content Ecosystem</li>
                        <li>Agency Of Scale</li>
                        <li>NEXT Technology Platforms</li>
                    </Links>
                </Col>
                <Col md= {3} lg={3} xl={3} xs={12}>
                    <Foottitle>How We Deliver</Foottitle>
                    <Links>
                        <li>Consulting</li>
                        <li>Centers of Excellence</li>
                        <li>Tech-Led GCC Capabilities</li>
                        <li>Development and Co-Commercialization</li>
                    </Links>
                </Col>
                <Col md= {3} lg={3} xl={3} xs={12}>
                    <Foottitle>What We Think</Foottitle>
                    <Links>
                        <li>Blogs</li>
                        <li>Videos</li>
                        <li>Reports</li>
                        <li>Case Studies</li>
                        <li>Indegene Digital Summit</li>
                        <li>Industry Councils</li>
                    </Links>
                </Col>
            </Row>
            <Row>
                <Col md= {3} lg={3} xl={3} xs={12}>
                    <Foottitle>Who We Are</Foottitle>
                    <Links>
                        <li>About Us</li>
                        <li>Leadership</li>
                        <li>Social Responsibility</li>
                        <li>Recognition</li>
                    </Links>
                </Col>
                <Col md= {3} lg={3} xl={3} xs={12}>
                    <Foottitle>Investor Relations</Foottitle>
                    <Links>
                        <li>News</li>
                    </Links>
                </Col>
                <Col md= {3} lg={3} xl={3} xs={12}>
                    <Foottitle>Careers</Foottitle>
                    <Links>
                        <li>What We Value</li>
                        <li>Opportunities</li>
                        <li>For Employees</li>
                    </Links>
                </Col>
                <Col md= {3} lg={3} xl={3} xs={12}>
                    <Links>
                        <li>Contact</li>
                    </Links>
                </Col>
            </Row>
            <Row>
                <Col md={10}>
                    <Bottomlink>
                        <li>© 2024 Deepan India. All Rights Reserved.</li>
                        <li>Privacy Policy</li>
                        <li>Other Policies</li>
                        <li>Cookies</li>
                        <li>Cookie Settings</li>
                    </Bottomlink>
                </Col>
                <Col md={2}>
                    <Bottomlink>
                        <li><FaLinkedinIn /></li>
                        <li><FaTwitter /></li>
                    </Bottomlink>
                </Col>
            </Row>
        </Container>
    </Footermain>
  )
}
const Footermain = styled.section`
    padding: 70px 0 30px 0;
    background-color: #e8e4e4;
`;
const Foottitle = styled.h3`
    font-size: 16px;
    font-weight: 700;
    padding: 5px 0;
    text-transform: capitalize;
`;
const Links = styled.ul`
    margin: 10px 0;
    list-style-type: none;
    padding: 0;
    
    li{
        padding: 5px 0;
        font-size: 15px;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
     &:hover{
        color: #013396;
     }   
    }
`;
const Bottomlink = styled.ul`
        margin: 20px 0 0 0;
    list-style-type: none;
    padding: 0;
    
    li{
        padding: 5px 10px;
        font-size: 13px;
        display: inline-block;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
     &:hover{
        color: #013396;
     }   
    }
`;