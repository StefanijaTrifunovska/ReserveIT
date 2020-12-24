import React from 'react';
import './User.scss';
import Dashboard from './Dashboard';
import {Link} from 'react-router-dom';
function User() {
    
    return (
        <div>
        <div className="user-container">
            <div className="hello">
                Hello!
            </div>
            <Dashboard />
            <Link to='/profile' className="profile-btn">My Profile</Link>
            </div>
        </div>
        
    );
}



export default User;