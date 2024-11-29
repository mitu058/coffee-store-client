import React from 'react';
import error from '../images/404/404.gif'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
           <img className='' src={error} alt="" />
           <Link to='/'><button className="btn p-2 m-2 bg-[#331A15] text-white">Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;