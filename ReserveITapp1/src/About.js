import React from "react";
import { Link } from "react-router-dom";
import "./About.scss";

function About() {
  return (
    <div className="about">
    <div className="about-container">
      <div className="about-text">
            <h1>About</h1>
            <p>
              ReserveIT offers a system that is the easiest way to take online
              reservations without the headache of expensive software and complicated
              pricing structures.
              <br></br>Customers can use a designated website or mobile application to
              reserve a table even before they set foot in a restaurant.
              <br></br>Simply put, ReserveIT puts you in control of the data and the
              reservation experience, allowing businesses to build direct
              relationships with their guests, and customers to build relationships
              with their favorite places..
              <br></br>For information about how to sign your business up, contact us{" "}
              <Link to="/help">here.</Link>
            </p>
        </div>
        <img src="img/About-Illustration.svg" alt="illustration" className="about-illustration"/>
        </div>
    </div>
  );
}
export default About;
