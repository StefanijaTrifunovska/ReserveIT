import React from 'react';
import './Profile.scss';
import {Link} from 'react-router-dom';

function Profile() {
    return (
        <div>
            <div className="profile-container">
                <div className="myProfile">
                   <h4>My profile</h4> 
                </div>
                <div className="profile-section">  
                <div className="one">
                        <div className="name">Name: </div>
                        <div>Jane Doe</div>
                    </div>
                    <div className="two">
                        <div className="number">Number: </div>
                        <div>070123456</div>
                    </div>
                    <div className="three">
                        <div className="email">Email: </div>
                        <div>janedoe@gmail.com</div>
                    </div>
                    <div className="edit">
                    <Link to="/reserve">
              <div className="white">Edit</div>
            </Link>
                    </div>        
                </div>
            </div>
            <div className="dashboard-btn"><Link to='/user' >Dashboard</Link></div>
        </div>
    );
}

export default Profile;