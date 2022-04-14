import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Form } from 'react-bootstrap';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }

    if (user) {
        navigate('/home')
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password, name);
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className="w-full ">
            <h2 className="text-center my-5">Register Please</h2>
            <form onSubmit={handleRegister}>
                <div className="block w-1/2 mx-auto text-center ">
                    <input className="border-2 w-1/2 h-10 mb-2 p-4 rounded-md" type="text" name="name" id="" placeholder="Your Name" />
                    <br />
                    <input className="border-2 w-1/2 h-10 mb-2 p-4 rounded-md" type="email" name="email" id="" placeholder="Your Email" />
                    <br />
                    <input className="border-2 w-1/2 h-10 mb-2 p-4 rounded-md" type="password" name="password" id="" placeholder="Your Password" />
                    <Form.Group className="mb-3 w-1/2 mx-auto " controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept Genius Car Terms and Condition" />
                    </Form.Group>
                   
                    <input className="border-2  w-1/2 h-10 mb-2 bg-gray-200 rounded-md px-3" type="submit" value="Register" />
                </div>
                <div className="text-center">
                    <p>Already have an account? <button className="text-primary m-2 " onClick={navigateLogin}>Please Login</button></p>
                </div>
            </form>
            {/* <p>Already have an account? <button className="text-primary m-2 " onClick={navigateLogin}>Please Login</button></p> */}
        </div>
    );
};

export default Register;