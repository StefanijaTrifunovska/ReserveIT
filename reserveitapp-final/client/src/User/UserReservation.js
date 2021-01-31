 import React from 'react';
 import "./Dashboard.scss"
 import { useSelector } from 'react-redux';
 import { Grid, CircularProgress } from '@material-ui/core'; 
 import Reservation from './Reservation.js';


 function UserReservation(){
    const posts= useSelector((state)=>state.posts);
    console.log(posts);


    return (
        
        !posts.length ? <CircularProgress /> : (
            <Grid container alignItems="flex-start" spacing="3" direction="column" justify="center">
                {posts.map((post)=>(
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Reservation  post={post}/>
                    </Grid>
                ))}

            </Grid>

        )
    )
                    
}


export default UserReservation;