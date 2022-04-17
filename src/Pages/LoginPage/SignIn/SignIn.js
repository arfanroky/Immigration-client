import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignIn = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigateSignUp = (event) => {
    navigate('/sign-up');
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;

    if (email) {
      await sendPasswordResetEmail(email);
      toast('send email');
    }
    else{
      toast('please enter your email ')
    }
  };

  return (
    <div className="container w-50 mx-auto">
      <h1 className="text-primary text-center my-2">Sign In</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
          Sign In
        </Button>
      </Form>

      <p>
        New Here?
        <Link
          className="text-danger pe-auto text-decoration-none"
          to="/sign-up"
          onClick={navigateSignUp}
        >
          Please Sign Up
        </Link>
      </p>
       <p>
        Forgot password?
        <button
          className="text-primary pe-auto text-decoration-none btn btn-link"
          onClick={resetPassword}
        >
          Reset Password
        </button>
      </p>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SignIn;
