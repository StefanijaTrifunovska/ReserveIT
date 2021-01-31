import React,  {useState, useEffect} from "react";
import "./App.scss";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';



function Nav() {
  const SignUpColor = {
    color: "#FFFEFE",
  };
  const [showLinks, setShowLinks]=useState(false);
  const [user, setUser] =useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch=useDispatch();
  const history=useHistory();
  const location=useLocation();

  const logout= ()=>{
    dispatch({type: 'LOGOUT'});

    history.push('/');

    setUser(null);
  };


  useEffect(()=>{
    const token= user?.token;
    //JWT

    setUser(JSON.parse(localStorage.getItem('profile')));
  },[location]);


  return (
    <div className="nav">
      <Link to="/" className="logo-img">
        <img src="img/logo.svg" alt="logo"></img>
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
       <div className="tool-bar">
          {user ? (
            <div className="user-on">
            <Link to="/user">{user.result.name}</Link>
            <button className="logout-btn" onClick={logout}>Log Out</button>
            </div>
            ) : (
              <div>
              <div className="user-off">
                <Link to="/signin">
                  <div className="sign-in-nav nav-links"> Sign In </div>
                </Link>
                <Link style={SignUpColor} to="/signup">
                  <div className="sign-up-nav whiteText nav-links"> Sign Up </div>
                </Link>
                </div>
              </div>
            )}
        </div>
      </nav>
      <div id={showLinks ? "close" : ""}  onClick={()=> setShowLinks(!showLinks)} className="menu hide-desktop">
        <span> </span> <span> </span> <span> </span> <span> </span>
      </div>
    </div>
  );
}

export default Nav;
