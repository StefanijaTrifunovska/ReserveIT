import React from 'react';
import './Dashboard.scss';

function Dashboard() {
    return (
        <div>
            <div className="dashboard-container">
                <div className="dashboard-top">
                  <h4>My dashboard</h4>
                  <h4>Make a reservation</h4>
                </div>
                <div className="nav-reservations">
                    <div className="current">
                    My reserervations
                    </div>
                    <div className="edit">
                        Edit 
                    </div>
                </div>
                <div className="info-reservations">
                    <div className="place">
                        Place:
                    </div>
                    <div className="date">Date:</div>
                    <div className="time">Time:</div>
                </div>
            </div>
        </div>
    );
}



export default Dashboard;