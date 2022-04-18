import React, { useRef } from 'react';
import { Button, Form} from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const Checkout = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')

    const handleCheckout = (event) => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if(email && password){
            toast('Thank Your for Booking');
        }
    }

    return (
        <div className='container w-100 ' style={{height:'60vh'}}>
             <Form className="sign-in-form mt-5 pt-5" onSubmit={handleCheckout}>
            <h1 className='text-center'>Booking</h1>
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
          Booking
        </Button>
      
      </Form>

           <ToastContainer></ToastContainer>
        </div>
    );
};

export default Checkout;