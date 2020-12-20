import React from 'react';
import Iframe from 'react-iframe';

function Reserve() {
   //const style ={ width:425px , height="350" ,frameborder="0", scrolling="no", marginheight="0" ,marginwidth="0"}
   
    return (
        
        
         <div className="About">
        // <Iframe 
        // url= "https://www.openstreetmap.org/?mlat=41.9417&amp;mlon=21.4124#map=9/41.9417/21.4124"
        // src="https://www.openstreetmap.org/export/embed.html?bbox=19.646301269531254%2C41.25676297956369%2C23.17840576171875%2C42.61942189393028&amp;layer=mapnik&amp;marker=41.941732369371216%2C21.412353515625"
        // style="border: 1px solid black"
        // width="450px"
        // height="450px"
        // id="myId"
        // className="myClassname"
        // display="initial"
        // position="relative"/>

            <h1>Map</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d763624.3338982764!2d21.2971040166626!3d41.61451072088425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2smk!4v1608407282351!5m2!1sen!2smk" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            
        </div>
    );
}

export default Reserve;