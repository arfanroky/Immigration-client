import React from 'react';

import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import './SocialLogin.css';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    let errorElement;

    if (error || error1) {
        errorElement = <div>
            <p className="text-danger">Error: {error?.message}</p>
        </div>

    }

    if (loading || loading1) {
        return <Loading />
    }

    if (user || user1) {
        navigate('/');
    }

    return (
        <div className='social-login-form'>
            <div className="d-flex align-items-center gap-3">
                <div
                    className="bg-primary"
                    style={{ height: '1px', width: '45%' }}
                ></div>
                <p>or</p>
                <div
                    className="bg-primary"
                    style={{ height: '1px', width: '45%' }}
                ></div>
            </div>
            {
                errorElement
            }
            <button
                onClick={() => signInWithGoogle()}
                className="btn shadow-lg  w-100 my-3 d-flex justify-content-around align-items-center">
                <img style={{ width: '40px' }} src="https://ssl.gstatic.com/images/branding/googleg/2x/googleg_standard_color_64dp.png" alt="" />{' '}

                <span>Google Sign In</span>
            </button>

            <button
                onClick={() => signInWithGithub()}
                className="btn shadow-lg w-100 my-3 d-flex justify-content-around align-items-center">
                <img src="https://img.pngio.com/github-logo-icon-of-glyph-style-available-in-svg-png-eps-ai-github-icon-png-256_256.png" style={{ width: '35px' }} alt="" />{' '}
                <span>Github Sign In</span>
            </button>
        </div>
    );
};

export default SocialLogin;
