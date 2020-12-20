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
                <div className="name">
                        Name: 
                    </div>Jane Doe
                    <div className="number">Number: 
                    </div>070123456
                    <div className="email">Email: </div>janedoe@gmail.com
                    <div className="edit">
                    <Link to="/reserve">
              <div className="white">Edit</div>
            </Link>
                    </div>        
                </div>
            </div>
        </div>
    );
}

export default Profile;