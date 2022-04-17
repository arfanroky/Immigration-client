
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SignUp = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    // const confirmPasswordRef = useRef('')

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        Createerror,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [sendEmailVerification, sending, Sendingerror] = useSendEmailVerification(auth);


    const handleSubmit = event => {
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef?.current.value;
        const password = passwordRef?.current.value;
        // const confrimPassword = confirmPasswordRef.current.value;

        createUserWithEmailAndPassword(email, password)
        // sendEmailVerification(email, password)


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

      {/* <p>
        New to Genius Car?{' '}
        <Link
          className="text-danger pe-auto text-decoration-none"
          to="/register"
          onClick={navigateRegister}
        >
          Please Register
        </Link>
      </p> */}
      {/* <p>
        Forgot password?
        <button
          className="text-primary pe-auto text-decoration-none btn btn-link"
          onClick={resetPassword}
        >
          Reset Password
        </button>
      </p>
      <SocialLogin />
      <ToastContainer /> */}
    </div>
    );
};

export default SignUp;