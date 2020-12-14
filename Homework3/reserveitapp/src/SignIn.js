import React from "react";
import "./Sign-up.scss";
import { Link } from "react-router-dom";
import "./sign-in.scss";

function SignIn() {
  return (
    <div className="container ">
      <div className="About">
        <h1>Sign in</h1>
        <div className="info">
          <div className="email">
            Email <input type="text" name="sign-up" id="email" />
          </div>
          <div className="password">
            Password <input type="text" name="sign-up" id="password" />
          </div>
          </div>
          <div className="navigations">
            <div className="signin">
              <Link to="/Dashboard">
                
                <div className="signin1">Sign In</div>
              </Link>
            </div>
            </div>
            <div className="password-create">
            <div className="reset">
              <Link to="/RestartPassword">
                
                <div className="ForgotPassword">Forgot Password?</div>
              </Link>
            </div>
            <div className="create">
              <Link to="/SignUp">
                
                <div className="New">Create new account</div>
              </Link>
              </div>
            </div>
          
        
      </div>
    </div>
  );
}

export default SignIn;