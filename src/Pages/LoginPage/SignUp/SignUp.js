
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './SignUp.css';

const SignUp = () => {
  const nameRef = useRef('')
  const emailRef = useRef('')
  const passwordRef = useRef('')
  
  const [createUserWithEmailAndPassword, user, loading, error] =
  useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  const navigate = useNavigate();

  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  if (user) {
    navigate(from, { replace: true });
  }
 

  if(loading ){
    return <Loading></Loading>
  }


  const handleSubmit = event => {
    event.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef?.current.value;
    const password = passwordRef?.current.value;

    createUserWithEmailAndPassword(email, password)
  }

  const navigateSignIn = () => {
    navigate('/sign-in')
  }

 

  return (
    <div className="container  mt-5">
      <h1 className="text-danger text-center my-2">Sign Up</h1>
      <Form className='sign-up-form' onSubmit={handleSubmit}>
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
          variant="danger w-50 mx-auto d-block mb-2" type="submit">
          Sign Up
        </Button>
        <p className='text-center'>
        Already Have an account? <Link
          className="text-danger text-decoration-none"
          to="/sign-in"
          onClick={navigateSignIn}>
          Please Login
        </Link>
      </p>
      </Form>

  
<SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;