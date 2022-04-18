import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';


const RequireAuth = ({children}) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        return <div className="d-flex justify-content-center align-items-center w-100 " style={{height:'100vh'}} >
            <p style={{fontSize:'4rem'}} className='fw-bold'>
          Loading . . . <Loading></Loading>
            </p>
        </div>
    }

    if(!user){
        return <Navigate to='/sign-in' state={{from:location}} replace></Navigate>
    }

    return children;
};

export default RequireAuth;