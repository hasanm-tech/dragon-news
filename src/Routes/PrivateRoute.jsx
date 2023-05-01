import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <Spinner animation="border" role="status"></Spinner>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} replace to='/login'></Navigate>
};

export default PrivateRoute;