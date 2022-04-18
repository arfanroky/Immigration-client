import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import './SignIn.css';
import Loading from '../../../Shared/Loading/Loading';


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
    <div className="container mt-5">
      <h1 className="text-danger text-center my-2">Sign In</h1>
      <Form className="sign-in-form" onSubmit={handleSubmit}>
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
        <Button variant="danger w-50 mx-auto d-block mb-2" type="submit">
          Sign In
        </Button>
      <div className="text-center p-0 m-0">
      <p style={{color:'red', margin:'.5rem 0'}}>
                {error?.message}
            </p>
          <p className="text-center">
          {
              (loading || sending) && <Loading></Loading>
            }
          </p>
      <p className='p-0 m-0'>
        New Here? <Link
          className="text-danger  text-decoration-none"
          to="/sign-up"
          onClick={navigateSignUp}
        >
          Please Sign Up
        </Link>
      </p>
       <p>
        Forgot password?
        <button
          className="text-danger pe-auto text-decoration-none btn btn-link"
          onClick={resetPassword}
        >
          Reset Password
        </button>
      </p>
      </div>
      </Form>



      <SocialLogin></SocialLogin>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SignIn;
