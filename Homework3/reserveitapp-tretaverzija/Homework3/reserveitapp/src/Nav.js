import React from 'react';
import './App.scss';
import { Link } from 'react-router-dom';


function Nav() {
    const SignUpColor={
        color: '#FFFEFE'
    };
    return (
        <div className="nav">
        <a href="index.html" className="logo-img"><img src="img/logo.svg" alt="logo"></img></a>
        <Link to='/reserve'> <div className="reserve">Make a reservation</div> </Link>
         <nav>
            <Link to='/'>
                <div className="home nav-links">Home</div>
            </Link>
            <Link to='/about'>
                <div className="about nav-links">About</div>
            </Link>
            <Link to='/help'>
                <div className="help nav-links">Help</div>
            </Link>    
            <Link to='/signin'>
                <div className="sign-in-nav nav-links">Sign In</div>
            </Link>
            <Link style={SignUpColor} to='/signup'>
                <div className="sign-up-nav whiteText nav-links">Sign Up</div>
            </Link>
        </nav>
        </div>
    );
}

export default Nav;