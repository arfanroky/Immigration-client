import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';


const RequireAuth = ({children}) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        return <Loading/>
    }

    if(!user){
        return <Navigate to='/sign-in' state={{from:location}} replace></Navigate>
    }

    return children;
};

export default RequireAuth;