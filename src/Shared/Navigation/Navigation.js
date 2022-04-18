import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Navigation.css';
import CustomLink from '../CustomLink/CustomLink';

const Navigation = () => {

  const [user] = useAuthState(auth)

  const handleSignOut = () => {
    signOut(auth);
  }



  return (
    <Navbar bg="light" sticky='top' expand="lg">
      <Container>
        <Link className='active-link' to='/'>
          Migrate
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-list">
            <CustomLink to="/">
              Home
            </CustomLink>
            <CustomLink to="/services">
              Services
            </CustomLink>
            <CustomLink to="/about">
              About
            </CustomLink>
            <CustomLink to="/blogs">
              Blogs
            </CustomLink>
            <CustomLink to="/sign-in">
              Sign In
            </CustomLink>
            {
              user ? <button onClick={handleSignOut} className='signOut-btn btn-sm btn-danger'>
                Sign Out
              </button> :
                <CustomLink to='/sign-up'>Sign Up</CustomLink>
            }
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Navigation;