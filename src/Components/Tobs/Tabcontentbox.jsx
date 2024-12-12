import React from 'react';
import styled from 'styled-components';
import { FaChevronRight } from "react-icons/fa";

export default function Tabcontentbox({ title, description }) {
  return (
    <Maindiv>
        <Tabbox>
            <Boxtitle>{title}</Boxtitle>
            <Boxpara>{description}</Boxpara>
            <Boxicon><FaChevronRight /></Boxicon>
          </Tabbox>
    </Maindiv>
  );
}

const Maindiv = styled.div``;

const Tabbox = styled.div`
  padding: 10px 5px;
  margin: 15px 0;
  cursor: pointer;
  transition: all 0.8s ease;
  height: 360px;
  &:hover {
    color: #013396;
  }
     @media screen and (max-width: 600px){
     height: inherit;
     }
    
`;

const Boxtitle = styled.h1`
  font-size: 2.2em;
  font-weight: 600;
  margin-bottom: 15px;
  padding: 0 10px;
  @media screen and (max-width: 600px){
    font-size: 1.2em;
    font-weight: 800;
    margin-bottom: 5px;
  }
    @media (min-width: 768px) and (max-width: 1024px) {
  font-size: 1.1em;
  
}
`;

const Boxpara = styled.p`
  font-size: 1.5em;
  font-weight: 400;
  margin-bottom: 15px;
  padding: 0 10px;
    @media screen and (max-width: 600px){
    font-size: 1.1em;
    margin-bottom: 10px;
    text-align: justify;
    }
      @media (min-width: 768px) and (max-width: 1024px) {
  font-size: 1em;
  
}
`;

const Boxicon = styled.div`
  border: 1px solid;
  width: 25px;
  padding: 5px;
  border-radius: 6px;
  margin-left: 10px;
`;
