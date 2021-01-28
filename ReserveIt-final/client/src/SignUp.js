import React, { useState } from "react";
import { Link,useHistory, } from "react-router-dom";
import "./Sign-up.scss";
import { signup } from '../../client/src/actions/auth';
import { useDispatch } from 'react-redux'


const initialState={ firstName:'', lastName:'', email:'',mobile:'', password:'', confirmPassword:'' }

function SignUp() {
  const [formData, setFormData]=useState(initialState);
  const history=useHistory();
  const dispatch=useDispatch();
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    dispatch(signup(formData, history))
  }
  const handleChange=(e)=>{
    setFormData( { ...formData,[e.target.name] : e.target.value  } )
  }
  
  return (
    <div className="SignUp">
    <div className="SignUp-container">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
      <div className="signup-form" >
        <div className="information">
          <div className="name">
            <div className="firstname">
              
              <input type="text" name="firstName" id="first" placeholder="First Name" onChange={handleChange}/>
            </div>
            <div className="lastname">
             <input type="text" name="lastName" id="last" placeholder="Last Name" onChange={handleChange}/>
            </div>
          </div>
          <div className="email">
             <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange}/>
          </div>
          <div className="mobile">
             <input type="text" name="mobile" id="mobile" placeholder="Mobile Number" onChange={handleChange}/>
          </div>
          <div className="password">
            <input type="password" name="password" id="password" placeholder="Password" onChange={handleChange}/>
          </div>
          <div className="confirm">
            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
          </div>
        </div>
      </div>
      
        <div className="navigations">
          <div className="Forsignup">
    
              <button  type="submit" className="sign-up" >Sign Up</button>
            
          </div>
          <div className="account">Have an account?</div>
          <Link to="/signin">
            <div className="sign-in">Sign In</div>
          </Link>
        </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
