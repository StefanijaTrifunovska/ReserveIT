import React from 'react';
import Iframe from 'react-iframe'


function Reserve() {
    //const style ={ width:425px , height="350" ,frameborder="0", scrolling="no", marginheight="0" ,marginwidth="0"}

    return (

        <
        div >
        <
        h1 > Map < /h1>

        <
        Iframe width = "500"
        height = "420"
        frameborder = "0"
        scrolling = "no"
        marginheight = "0"
        marginwidth = "0"
        url = "http://overpass-turbo.eu/map.html?Q=%2F*%0AThis%20is%20an%20example%20Overpass%20query.%0ATry%20it%20out%20by%20pressing%20the%20Run%20button%20above!%0AYou%20can%20find%20more%20examples%20with%20the%20Load%20tool.%0A*%2F%0Anode%5Bamenity%3Dbar%5D%0A(40.994410999439516%2C20.533447265625%2C42.370720143531976%2C22.8515625)%3B%0Aout%3B%0A%0Anode%0A%20%20%5Bamenity%3Drestaurant%5D%0A%20%20(40.994410999439516%2C20.533447265625%2C42.370720143531976%2C22.8515625)%3B%0Aout%3B%0A%0Anode%0A%20%20%5Bamenity%3Dpub%5D%0A%20%20(40.994410999439516%2C20.533447265625%2C42.370720143531976%2C22.8515625)%3B%0Aout%3B%0Anode%0A%20%20%5Bamenity%3Dgrill%5D%0A%20%20(40.994410999439516%2C20.533447265625%2C42.370720143531976%2C22.8515625)%3B%0Aout%3B%0Anode%0A%20%20%5Bamenity%3Dlounge%5D%0A%20%20(40.994410999439516%2C20.533447265625%2C42.370720143531976%2C22.8515625)%3B%0Aout%3B%0Anode%0A%20%20%5Bamenity%3Dpizza%5D%0A%20%20(40.994410999439516%2C20.533447265625%2C42.370720143531976%2C22.8515625)%3B%0Aout%3B%0Anode%0A%20%20%5Bamenity%3Dfast_food%5D%0A%20%20(40.994410999439516%2C20.533447265625%2C42.370720143531976%2C22.8515625)%3B%0Aout%3B%0Anode%0A%20%20%5Bamenity%3Dcafe_bar%5D%0A%20%20(40.994410999439516%2C20.533447265625%2C42.370720143531976%2C22.8515625)%3B%0Aout%3B%0Anode%0A%20%20%5Bamenity%3Dcoffe_shop%5D%0A%20%20(40.994410999439516%2C20.533447265625%2C42.370720143531976%2C22.8515625)%3B%0Aout%3B%0Anode%0A%20%20%5Bamenity%3Dfish_and_chips%5D%0A%20%20(40.994410999439516%2C20.533447265625%2C42.370720143531976%2C22.8515625)%3B%0Aout%3B%0A%0A%0A%0A%0A%0A%0A%0A%7B%7Bstyle%3A%20%0Anode%7B%0Aicon-image%3A%20url(%27icons%2Fmaki%2Fcafe-18.png%27)%3B%0A%20%20icon-width%3A%2018%3B%0A%7D%0A%20%7D%7D" > < /Iframe><br/ > < small > < a href = "https://www.openstreetmap.org/#map=8/41.898/20.698" > View Larger Map < /a></small >



        <
        /div>
    );
}

export default Reserve;