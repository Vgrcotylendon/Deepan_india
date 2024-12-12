import React from 'react'
import styled from 'styled-components'
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary my-topheader">
        <Container>
            <Navbar.Brand href="#home">Deepan India every where</Navbar.Brand>
            <Topmenuitem>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex align-items-center">
                <NavDropdown title="Who We Are" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">  Leadership </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Resposicbility</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Get in</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home">Investor Relationship</Nav.Link>
                <Nav.Link href="#link">News</Nav.Link>
                <NavDropdown title="Carrer" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">What we do</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2"> Carre</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Openings</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link"><Btntopheader>Contact</Btntopheader></Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Topmenuitem>
        </Container>
        </Navbar>
    </div>
  )
}

export default Header

const Topmenuitem = styled.div`

`;
const Btntopheader = styled.button`
  padding: 10px 35px;
  border: 1px solid #fa0001;
  background-color: #fff;
  `;

