import React, { useState } from 'react';
import "./TableReservations.scss";
import { useDispatch } from 'react-redux';
import { createPost } from '../../client/src/actions/posts'

//import useStyles from './styles';

function TableReservations(){
    const [postData, setPostData]=useState({
        place:'',
        numberPeople:'',
        date:'',
        time:''
    });

    const dispatch= useDispatch();


    const handleSubmit =(e)=>{
        e.preventDefault();

        dispatch(createPost(postData));

    }
    const clear=()=>{


    }
    
    return (
        <div>
           <div className="reservations-container">
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                 <label htmlFor="place">Place:</label>
                   <input name="place" type="text" value={postData.place} onChange={(e)=>setPostData({...postData, place:e.target.value})}/>
                   <label htmlFor="numberPeople">Number of people:</label>
                   <input name="numberPeople" type="text" value={postData.numberPeople} onChange={(e)=>setPostData({...postData,numberPeople:e.target.value})}/>
                   <label htmlFor="date">Date:</label>
                   <input name="date" type="date" value={postData.date} onChange={(e)=>setPostData({...postData,date:e.target.value})}/>
                   <label htmlFor="time">Time:</label>
                   <input name="time" type="time" value={postData.time} onChange={(e)=>setPostData({...postData,time:e.target.value})}/>
                    <button type="submit">Reserve</button>
                    <button onClick={clear}>Reset</button>
                   
                </form>
            </div>
        </div>
    )

}

export default TableReservations;