import React,  {useState} from "react";
import "./App.scss";
import { Link } from "react-router-dom";


function Nav() {
  const SignUpColor = {
    color: "#FFFEFE",
  };
  const [showLinks, setShowLinks]=useState(false);
  
  return (
    <div className="nav">
      <Link to="/" className="logo-img">
        
        <img src="img/logo.svg" alt="logo">
          
        </img>
      </Link>
      <nav className="hide-mobile nav-menu" id={showLinks ? "hidden" : ""}>
      <Link to="/reserve">
        <div className="reserve"> Reserve </div>
      </Link>
        <Link to="/">
          <div className="home nav-links"> Home </div>
        </Link>
        <Link to="/about">
          <div className="about nav-links"> About </div>
        </Link>
        <Link to="/help">
          <div className="help nav-links"> Help </div>
        </Link>
        <Link to="/signin">
          <div className="sign-in-nav nav-links"> Sign In </div>
        </Link>
        <Link style={SignUpColor} to="/signup">
          <div className="sign-up-nav whiteText nav-links"> Sign Up </div>
        </Link>
      </nav>
      <div id={showLinks ? "close" : ""}  onClick={()=> setShowLinks(!showLinks)} className="menu hide-desktop">
        <span> </span> <span> </span> <span> </span> <span> </span>
      </div>
    </div>
  );
}

export default Nav;
