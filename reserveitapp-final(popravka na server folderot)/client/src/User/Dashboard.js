import React, { useState, useEffect } from 'react';
import './Dashboard.scss';
import {Link} from 'react-router-dom';
import UserReservation from './UserReservation';
import { useDispatch } from 'react-redux';

import { getPosts } from '../actions/posts';


function Dashboard() {
    const [currentId, setCurrentId]=useState(0);
    const dispatch= useDispatch();
    
    useEffect(()=>{
        dispatch(getPosts());
    },[currentId,dispatch]);
    
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
                <UserReservation setCurrentId={setCurrentId}/>
                </div>
            
            
        </div>
    );
}



export default Dashboard;