import React from 'react';


function Reservation({post}){


    return (
        <div>
        <div className="info-reservations">
                    <div className="one">
                        <div className="place">Place: </div>
                        <div>{post.place}</div>
                    </div>
                    <div className="two">
                        <div className="date">Date: </div>
                        <div>{post.date}</div>
                    </div>
                    <div className="three">
                        <div className="place">Time: </div>
                        <div>{post.time}</div>
                    </div>
                    <button onClick={()=>{}}>Edit</button>
        </div>
        </div>
    );

}

export default Reservation;