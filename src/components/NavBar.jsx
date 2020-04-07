import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';

export const NavBar = () => (
  <Navbar expand='lg'>
    <Navbar.Brand href='/'>Brand</Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />

    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        <Nav.Item>
          <Nav.Link href='/'>Home</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
