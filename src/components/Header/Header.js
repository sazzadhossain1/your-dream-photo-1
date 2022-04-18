import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="link-container">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="text-danger text" as={Link} to="/">
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">

              {/* <Nav.Link className="text-danger" as={Link} to="/checkOut">
                Check Out
              </Nav.Link> */}

              <Nav.Link className="text-danger" as={Link} to="/service">
                Service
              </Nav.Link>

              <Nav.Link className="text-danger" as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link className="text-danger" as={Link} to="/about">
                About Me
              </Nav.Link>
              <Nav.Link className="text-danger" as={Link} to="/signup">
                Sign Up
              </Nav.Link>

              {user ? (
                <Nav.Link
                  className="text-danger"
                  as={Link}
                  onClick={handleSignOut}
                  to="/login"
                >
                  Sign Out
                </Nav.Link>
              ) : (
                <Nav.Link className="text-danger" as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
