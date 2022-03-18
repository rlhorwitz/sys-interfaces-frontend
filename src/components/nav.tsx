import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.svg'

// Dumb component 
export const Nav = (): React.ReactElement => (
  <Navbar bg="secondary" expand="lg">
    <Container>
      <Navbar.Brand><img width="100" src={logo} alt="logo" /></Navbar.Brand>
    </Container>
  </Navbar>
)