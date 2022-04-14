import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.svg'

interface Props {
  switchChecked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

// Dumb component 
export const Nav = ({ switchChecked, onChange }: Props): React.ReactElement => (
  <Navbar bg="secondary" expand="lg">
    <Container>
      <Navbar.Brand><img width="100" src={logo} alt="logo" /></Navbar.Brand>
      <Form>
        <Form.Check
          type="switch"
          checked={switchChecked}
          label={`Showing ${switchChecked ? "Business Owners" : "System Admins"}`}
          onChange={onChange}
        />
      </Form>
    </Container>
  </Navbar>
)