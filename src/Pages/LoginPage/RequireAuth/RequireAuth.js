import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

import Spinner from '../../../Shared/Spinner/Spinner';

const RequireAuth = ({children}) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <Spinner/>
    }

    if(!user){
        return <Link to='/login' state={{from:location}} replace></Link>
    }

    return children;
};

export default RequireAuth;