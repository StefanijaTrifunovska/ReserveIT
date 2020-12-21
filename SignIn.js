import React, { Component } from "react";
import "./Sign-up.scss";
import { Link } from "react-router-dom";
import "./sign-in.scss";


class SignIn extends Component {

  render(){
  return (
    <div className="container ">
      <div className="About">
        <h1>Sign in</h1>
        <div className="info">
          <div className="email">
           <img src="img/Email-icon.svg" alt="email-icon" />
            Email<input type="email" name="sign-up" id="email"/>
          </div>
          <div className="password">
           <img src="img/Password-icon.svg" alt="password-icon"/>
            Password <input type="password" name="sign-up" id="password" />
          </div>
          <div className="reset">
              <Link to="/RestartPassword">
                
                <div className="ForgotPassword">Forgot Password?</div>
              </Link>
            </div>
           
          </div>
          <div className="navigations">
            <div className="signin">
              <Link to="/user">
                
                <div  className="signin1">Sign In</div>
              </Link>
              <div className="create">
              <Link to="/SignUp">
                <div className="New">Create new account</div>
              </Link>
              </div>
            </div>
            </div>
           
            
          
        
      </div>
    </div>
  );
}
}


export default SignIn;
