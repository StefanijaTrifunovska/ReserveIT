import React from 'react';
import './App.scss';
import Nav from './Nav';
import About from './About';
import Help from './Help';
import SignIn from './SignIn'
import SignUp from './SignUp'
import Reserve from './Reserve'
import User from './User/User'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Profile from './User/Profile';


function App() {
   
  return (
    <Router>
    <div className="App">
      <header>
        <nav>
            <Nav />
            <Switch>
            <Route path='/reserve' component={Reserve}/>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About} />
            <Route path='/help' component={Help} />
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
            <Route path= '/user' component={User}/>
            <Route path='/profile' component={Profile}/>
            </Switch>
        </nav>
    </header>
    </div>
    </Router>
  );
}

const Home=()=>
{
  
    return (
    <div className="container">
        <div className="landing-container">
            <div className="main-section">
                <div className="main-text">
                <h1 className="media">Reserve it now.</h1>
                <h5>My favorite thing to make for dinner is a reservation</h5>
                <p >You are one click away from your favorite part of the day. All you need is an account. The rest is up to us.</p>
                </div>
                <div className="main-btns">
                    <Link to="/signup" className="startNow-btn whiteText medium-text"> <p>Start now</p><img src="img/Arrow-right.svg" alt="arrow"></img></Link>
                    <Link to="/reserve" className="aroundYou-btn medium-text ">Tables around you<img src="img/Arrow-right-blue.svg" alt="arrow"></img></Link>
                </div>
            </div>
            <img className="main-illustration hide-mobile" src="img/main-illustration.svg" alt="Illustration"></img>
        </div>
        <div className="section2-container">
            <img src="img/section2-illustration.svg" alt="illustration2"></img>
            <div className="section2">
                <h2 className="big-text">Our service</h2>
                <p className="medium-text">Our table reservation system is simple to use and is meant to save you time and money. Don't waste time thinking about where to dine out or go out for drinks. We have you covered</p>
                <Link to="/signup" className="signUp-btn btn whiteText">Sign up</Link>
            </div>
        </div>
        <div className="section3-container">
            <div className="section3">
                <h2 className="big-text">Still not sure?</h2>
                <p className="medium-text">For all additional information and any questions you may have, feel free to contact our support, available 24/7</p>
                <Link to="/help" className="contactus-btn btn whiteText">Contact us</Link>
            </div>
            <img src="img/section3-illustration.svg" alt="Illustration3"></img>
        </div>
    </div>
    );
}

export default App;
