import React from 'react';
import Iframe from 'react-iframe'


function Reserve() {
   //const style ={ width:425px , height="350" ,frameborder="0", scrolling="no", marginheight="0" ,marginwidth="0"}
   
    return (
        
        <div>
        <h1>Map</h1>
         
         <Iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=17.166137695312504%2C40.63896734381725%2C24.230346679687504%2C43.13306116240615&amp;layer=mapnik" style="border: 1px solid black"></Iframe><br/><small><a href="https://www.openstreetmap.org/#map=8/41.898/20.698">View Larger Map</a></small>
    </div>
    );
}

export default Reserve;
