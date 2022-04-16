import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto link-component">
          <Link to="/"> Home</Link>
          <Link to="/service">Service</Link>
          <Link to="/about"> About</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
