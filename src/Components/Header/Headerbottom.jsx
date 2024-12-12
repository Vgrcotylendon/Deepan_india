import React, { useState } from "react";
import styled from "styled-components";
import Deepalogo from "../../assets/logos/logo-deepan.png";
import Container from "react-bootstrap/Container";
import { FaSearch } from "react-icons/fa";

const Header = styled.header`
  position: sticky;
  top: 0;
  background: #fff;
  width: 100%;
  z-index: 2;
  
`;

const MyContainer = styled.div`
  padding: 0 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const LogoContainer = styled.div`
  flex: 1;
`;

const Logo = styled.img`
  width: 35%;
`;

const NavBtn = styled.div`
  display: flex;
  @media (max-width: 920px) {
    position: fixed;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 3rem);
    top: 7rem;
    left: 0;
    width: 100%;
    background-color: #fff;
    //background: linear-gradient(90deg, rgba(250,0,1,1) 1%, rgba(0,0,0,0.7147233893557423) 54%, rgba(7,49,159,1) 97%);
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.5s ease-in-out;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavLink = styled.li`
  position: relative;

  a {
    line-height: 3rem;
    color: #07319f;
    padding: 0 0.8rem;
    letter-spacing: 1px;
    font-size: 1.3rem;
    text-decoration: none;
    transition: 0.5s;

    &:hover {
      transform: scale(1.1);
    }

    @media screen and (max-width: 900px){
    font-size: 16px;
    }
  }
   
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 10rem;
  background-color: #fff;
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
  transition: 0.5s;
  z-index: 10;

  ${NavLink}:hover & {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      a {
        display: block;
        padding: 0.5rem 1rem;
        color: #07319f;
        background: #d5d5d9;
        transition: 0.3s;

        &:hover {
          background: #d5d5d9;
        }
      }
    }
  }
`;

const Hamburger = styled.div`
  display: none;

  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25px;
    height: 15px;
    cursor: pointer;

    div {
      width: 100%;
      height: 3px;
      background-color: #07319f;
      transition: all 0.3s;

      &:nth-child(1) {
        transform: ${({ isOpen }) => (isOpen ? "rotate(45deg) translateY(8px)" : "none")};
      }
      &:nth-child(2) {
        opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      }
      &:nth-child(3) {
        transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg) translateY(-8px)" : "none")};
      }
    }
  }
`;

const HeaderBottom = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Header>
      <Container>
        <MyContainer>
          <LogoContainer>
            <Logo src={Deepalogo} alt="Logo" />
          </LogoContainer>
          <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <div />
            <div />
            <div />
          </Hamburger>
          <NavBtn isOpen={isOpen}>
            <NavLinks>
              <NavLink>
                <a href="#">Home</a>
              </NavLink>
              <NavLink>
                <a href="#">About</a>
              </NavLink>
              <NavLink>
                <a href="#">Projects</a>
              </NavLink>
              <NavLink>
                <a href="#">Services</a>
              </NavLink>
              <NavLink>
                <a href="#">
                  Menu 1
                </a>
                <Dropdown>
                  <ul>
                    <li>
                      <a href="#">Link 1</a>
                    </li>
                    <li>
                      <a href="#">Link 2</a>
                    </li>
                  </ul>
                </Dropdown>
              </NavLink>
              <NavLink>
                <a href="#">
                  Menu 2
                </a>
                <Dropdown>
                  <ul>
                    <li>
                      <a href="#">Link 1</a>
                    </li>
                    <li>
                      <a href="#">Link 2</a>
                    </li>
                  </ul>
                </Dropdown>
              </NavLink>
              {/* <NavLink>
                <a href="#">
                  Menu 3
                </a>
                <Dropdown>
                  <ul>
                    <li>
                      <a href="#">Link 1</a>
                    </li>
                    <li>
                      <a href="#">Link 2</a>
                    </li>
                  </ul>
                </Dropdown>
              </NavLink> */}
              <NavLink>
                <a href="#">Contact</a>
              </NavLink>
              <NavLink>
                <a href="#"><FaSearch /></a>
              </NavLink>
            </NavLinks>
          </NavBtn>
        </MyContainer>
      </Container>
    </Header>
  );
};

export default HeaderBottom;
