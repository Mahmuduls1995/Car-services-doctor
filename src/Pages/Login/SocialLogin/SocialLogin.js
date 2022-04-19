import React from 'react';
import googleLogo from '../../../images/google.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {FaGithub,FaFacebook} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
        
    }
    if (error ||error1) {
            errorElement=<div>
            <p className="text-danger">Error: {error?.message} {error1?.message}</p>
          </div>
      }
    

      if (user||error1) {
        navigate('/home')
      }


    return (
        <div>
            <div className="flex items-center">
                <div style={{ height: '1px' }} className="bg-primary w-50"></div>
                <p className="mt-2 p-3">or</p>
                <div style={{ height: '1px' }} className="bg-primary w-50"></div>
            </div>
            {errorElement}


            <div className="mt-2" >
                <button 
                onClick={()=>signInWithGoogle()}
                className=" bg-info d-flex justify-content-center align-items-center w-50 d-block rounded-md  mx-auto">
                 <p className=" mx-5 mt-2 fs-3 fw-bold " >Facebook Sign In</p>
                <FaFacebook className="" size="50px"/>
                </button>
            </div>


            <div className="mt-2" >
                <button 
                onClick={()=>signInWithGithub()}
                className=" bg-info d-flex justify-content-center align-items-center w-50 d-block rounded-md  mx-auto">
                 <p className=" mx-5 mt-2 fs-3 fw-bold " >Github Sign In</p>
                <FaGithub className="" size="50px"/>
                </button>
            </div>


            <div className="mt-2" >
                <button 
                onClick={()=>signInWithGoogle()}
                className=" bg-info d-flex justify-content-center align-items-center w-50 d-block rounded-md  mx-auto">
                 <p className=" mx-5 mt-2 fs-3 fw-bold " >Google Sign In</p>
                <FcGoogle className="" size="50px"/>
                </button>
            </div>


           

            
        </div>
    );
};

export default SocialLogin;