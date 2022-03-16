import React from 'react';
import Container from 'react-bootstrap/Container';
import B_Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.svg'

export const Nav = (): React.ReactElement => (
  <Navbar bg="secondary" expand="lg">
    <Container>
      <Navbar.Brand><img width="100" src={logo} alt="logo" /></Navbar.Brand>
    </Container>
  </Navbar>
)