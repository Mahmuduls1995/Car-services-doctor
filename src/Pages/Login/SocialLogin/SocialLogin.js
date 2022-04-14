import React from 'react';
import googleLogo from '../../../images/google.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {FaGithub} from 'react-icons/fa';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
            errorElement=<div>
            <p className="text-danger">Error: {error.message}</p>
          </div>
      }
    

      if (user) {
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
            <div >
                <button
                onClick={()=>signInWithGoogle()}
                className="btn btn-info w-50 d-block mx-auto">
                    <p className=" my-auto" ><FontAwesomeIcon className="px-2 text-xl mr-12 " icon={faCoffee} size="2x" /><span className="text-xl mb-3">Google Sign In</span></p>
                </button>
            </div>
            <div className="mt-2" >
                <button className=" bg-info w-50 d-block  mx-auto">
                 <span className="text-2xl " >Github Sign In</span>
                <FaGithub className="text-2xl ml-12 w-5 h-6"/>
                </button>
            </div>
            <div className="mx-auto mt-2" >
                <button className="btn btn-info w-50 d-block mx-auto">
                    <p className=" my-auto" ><FontAwesomeIcon className="px-2 text-xl mr-12 " icon={faCoffee} size="2x" /><span className="text-xl mb-3">Facebook Sign In</span></p>
                </button>
            </div>

            
        </div>
    );
};

export default SocialLogin;