import React from 'react';
import './Dashboard.scss';
import {Link} from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <div className="dashboard-container">
                <div className="dashboard-top">
                  <h4>My dashboard</h4>
                      <Link to="/reserve">
                  <h4><div className="white">Make a reservation</div></h4>
            </Link>    
                </div>
                <div className="nav-reservations">
                    <div className="current">
                    My reserervations
                    </div>
                </div>
                <div className="info-reservations">
                    <div className="place">
                        Place: 
                    </div>Kafe Bar Sindikat
                    <div className="date">Date: 
                    </div>31.12.2020
                    <div className="time">Time: </div>14:30
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



export default Dashboard;