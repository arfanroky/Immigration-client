import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

const Navigation = () => {

  // const [user] = useAuthState();

  return (
    <Navbar bg="light" sticky='top' expand="lg">
      <Container>
        <Link className='' to='/'>
        
        Treatment
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/">
              Home
            </Link>
            <Link to="/services">
              Services
            </Link>
            <Link to="/about">
               About 
              </Link>
            <Link to="/sign-in">
            Sign In
            </Link>
            <Link to="/sign-up">
             {/* {user? " Sign Up" : "Sign Out"} */}
            </Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Navigation;