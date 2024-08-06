import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/react-js-tutorial/">Company Name</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/react-js-tutorial/">Home</Nav.Link>
          <Nav.Link as={Link} to="/react-js-tutorial/about">About</Nav.Link>
          <Nav.Link as={Link} to="/react-js-tutorial/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/react-js-tutorial/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
