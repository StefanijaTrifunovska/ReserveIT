import React from "react";
import { Link } from "react-router-dom";
import "./Sign-up.scss";

function SignUp() {
  return (
    <div className="SignUp">
    <div className="SignUp-container">
      <h1>Sign up</h1>
      <div className="signup-form">
        <div className="information">
          <div className="name">
            <div className="firstname">
              
              <input type="text" name="sign-up" id="first" placeholder="First Name"/>
            </div>
            <div className="lastname">
             <input type="text" name="sign-up" id="last" placeholder="Last"/>
            </div>
          </div>
          <div className="email">
             <input type="email" name="sign-up" id="email" placeholder="Email" />
          </div>
          <div className="mobile">
             <input type="text" name="sign-up" id="mobile" placeholder="Mobile Number" />
          </div>
          <div className="password">
            <input type="password" name="sign-up" id="password" placeholder="Password"/>
          </div>
          <div className="confirm">
            <input type="password" name="sign-up" id="confirm" placeholder="Confirm Password" />
          </div>
        </div>
      </div>
      
        <div className="navigations">
          <div className="Forsignup">
            <Link to="/dashboard">
              <div className="sign-up">Sign Up</div>
            </Link>
          </div>
          <div className="account">Have an account?</div>
          <Link to="/signin">
            <div className="sign-in">Sign In</div>
          </Link>
        </div>
      
      </div>
    </div>
  );
}

export default SignUp;