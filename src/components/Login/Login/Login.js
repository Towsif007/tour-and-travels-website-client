import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
             history.push(redirect_uri)
            });
    }
    return (
        <div className='mt-5'>
           <h1>Please Login</h1> 
           <button onClick={handleGoogleLogin} className="btn btn-warning mt-4 login">Google Sign In</button>
        </div>
    );
};

export default Login;

