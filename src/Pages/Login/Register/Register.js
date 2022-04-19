import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Form } from 'react-bootstrap';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../../PageTitle/PageTitle';
const Register = () => {
    const [agree, setAgree] = useState(false)
    const navigate=useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (loading || updating) {
        return <Loading></Loading>
        
    }
   
    // const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    if (user) {
        // navigate('/home')
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const agree = event.target.terms.checked;


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home')

    }
    return (
        <div className="w-full ">
            <PageTitle title="register"></PageTitle>
            <h2 className="text-center my-5">Register Please</h2>
            <form onSubmit={handleRegister}>
                <div className="block w-1/2 mx-auto text-center ">
                    <input className="border-2 w-1/2 h-10 mb-2 p-4 rounded-md" type="text" name="name" id="" placeholder="Your Name" />
                    <br />
                    <input className="border-2 w-1/2 h-10 mb-2 p-4 rounded-md" type="email" name="email" id="" placeholder="Your Email" />
                    <br />
                    <input className="border-2 w-1/2 h-10 mb-2 p-4 rounded-md" type="password" name="password" id="" placeholder="Your Password" />
                    <Form.Group className="mb-3 w-1/2 mx-auto " controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} className={agree ? 'text-primary' : 'text-danger'} type="checkbox" name="terms" id="terms" label="Accept Genius Car Terms and Condition" />
                    </Form.Group>

                    <input
                        disabled={!agree}
                        className="border-2  w-1/2 h-10 mb-2 bg-gray-200 rounded-md px-3"

                        type="submit"

                        value="Register" />
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