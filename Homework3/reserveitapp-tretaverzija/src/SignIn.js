
import React from "react";
import "./Sign-up.scss";
import { Link } from "react-router-dom";
import "./sign-in.scss";

function SignIn() {
  return (
    <div className="container ">
      <div className="About">
        <h1>Sign in</h1>

        <form action="http://localhost/reserveITapp/authentication.php" method="post">

        
        <div className="info">
          <div className="email">
            Email <input type="text" name="email" id="email" />
          </div>
          <div className="password">
            Password <input type="text" name="pass" id="pass" />
          </div>
          <button type="submit" name="submit" id="submit">submit</button>

          </div>
          </form>

          <div className="navigations">
            <div className="signin">
              <Link to="/Dashboard">
                
                <div className="signin1"></div>
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