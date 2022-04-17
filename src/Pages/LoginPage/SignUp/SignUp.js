
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SignUp = () => {
  const nameRef = useRef('')
  const emailRef = useRef('')
  const passwordRef = useRef('')
  
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    Createerror,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, Sendingerror] = useSendEmailVerification(auth);

  const navigate = useNavigate();



  const handleSubmit = event => {
    event.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef?.current.value;
    const password = passwordRef?.current.value;

    createUserWithEmailAndPassword(email, password)
    sendEmailVerification(email, password)


  }

  const navigateSignIn = () => {
    navigate('/sign-in')
  }

  return (
    <div className="container w-50 mx-auto">
      <h1 className="text-primary text-center my-2">Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter Name"

          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button
          variant="primary w-50 mx-auto d-block mb-2" type="submit">
          Sign Up
        </Button>
      </Form>

      <p>
        Already Have an account?
        <Link
          className="text-danger pe-auto text-decoration-none"
          to="/sign-in"
          onClick={navigateSignIn}
        >
          Please Login
        </Link>
      </p>

    </div>
  );
};

export default SignUp;