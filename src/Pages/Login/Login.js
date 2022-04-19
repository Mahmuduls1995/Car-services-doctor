import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../PageTitle/PageTitle';

const Login = () => {
    const emailRef = useRef(' ');
    const passwordRef = useRef(' ');
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>

    }
    if (user) {
        navigate(from, { replace: true });
        // navigate('/home')
    }

    if (error) {
        errorElement = <div>
            <p className="text-danger">Error: {error?.message}</p>
        </div>
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password)
    }
    const navigateRegister = () => {
        navigate('/register')
    }

    const reseatPassword = async () => {
        const email = emailRef.current.value
       if (email) {
        await sendPasswordResetEmail(email);
        toast('Sent email');
       }
       else{
           toast('Please enter your email address')
       }
    }


    
    return (


        <div className="container w-50 ">
            <PageTitle title="Login"></PageTitle>
            <h3 className="text-primary text-center mt-3 mb-5">Please login</h3>
            <div>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control ref={emailRef} className="p-3" type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control className="p-3" ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept Genius Car Terms and Condition" />
                    </Form.Group>
                    <Button variant="primary" className=" w-50 mx-auto p-3 d-block mb-3" type="submit">
                        Login
                    </Button>
                </Form>
                {errorElement}
                <p>New to Genius Car ? <button class="text-primary m-2" onClick={navigateRegister}>Please Register</button></p>
                <p>Forget Password ? <button class="text-primary m-2 btn btn-link" onClick={reseatPassword}>Reseat password</button></p>

                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;