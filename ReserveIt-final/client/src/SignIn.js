import React, { useState } from "react";
import "./Sign-up.scss";
import { Link, useHistory } from "react-router-dom";
import "./sign-in.scss";
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux'
import { signin } from '../../client/src/actions/auth';

const initialState={ email:'', password:'' }

function SignIn() {
  const [formData,setFormData]=useState(initialState);
  const history=useHistory();
  const handleSubmit=(e)=>{
    e.preventDefault();

    dispatch(signin(formData, history))
  }

  const handleChange=(e)=>{
    setFormData({ ...formData, [e.target.name]:e.target.value });
  };

  const dispatch=useDispatch();

  const googleSuccess= async (res)=>{
    const result= res?.profileObj;
    const token=res?.tokenId;

    try {
      dispatch({type:'AUTH', data:{result,token}});

      history.push('/user');
    } catch (error) {
      console.log(error);
    }
  }

  const googleFailure=(error)=>{
    console.log(error)
    console.log("Google Sign In was unsuccesful. Try again later")
  }

  return (
    <div className="container ">
      <div className="About">
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
        <div className="info">
          <div className="email">
           <img src="img/Email-icon.svg" alt="email-icon" />
            Email<input type="email" name="email" id="email" onChange={handleChange}/>
          </div>
          <div className="password">
           <img src="img/Password-icon.svg" alt="password-icon"/>
            Password <input type="password" name="password" id="password" onChange={handleChange}/>
          </div>
          <div className="reset">
              <Link to="/RestartPassword">
                
                <div className="ForgotPassword">Forgot Password?</div>
              </Link>
            </div>
           
          </div>
          <div className="navigations">
            <GoogleLogin
             clientId="427379778411-1tn30t4hdp7a112hu98rl6iaha96l9td.apps.googleusercontent.com"
            render={(renderProps)=>(
             <button onClick={renderProps.onClick} 
             disabled={renderProps.disabled} >Google Sign In</button> 
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
            />
            <div className="signin">
                <button type="submit" className="signin1">Sign In</button>
            </div> 
              <div className="create">
              <Link to="/SignUp">
                <div className="New">Create new account</div>
              </Link>
              </div>
            </div>
            </form>  
           
        
      </div>
    </div>
  );
}



export default SignIn;
