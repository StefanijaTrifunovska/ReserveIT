import React, { useState } from "react";
import emailjs from "emailjs-com";

import "./Help.scss";

function Help() {
  //EMAIL FUNCTION
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qub1pev",
        "template_a57suim",
        e.target,
        "user_j7RMNrkUz6JuCI9eg92WF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="help-container">
      <div className="faq">
        <FAQ />
      </div>
         <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" className="submit" />
      </form>
    </div>
  );
}

class FAQ extends React.Component{
  //const [showAnswer1, setShowAnswer1] = useState(false);
  render(){
  return (
    <div className="faq-main">
      <div className="answer1 answers" >
        Unfortunately without an account, you won't be able to make a
        reservation. However you can see what's available!{" "}
        <img src="img/arrow-up.svg" alt="arrow-up1" />
      </div>
      <div className="question1 questions">
        Can I use the service without an account?
        <img src="img/down-arrow.svg" alt="arrow1" />{" "}
      </div>
      <div className="question2 questions">
        Can I modify my reservation if I change my mind?
        <img src="img/down-arrow.svg" alt="arrow2" />
      </div>
      <div className="answer2 answers">
        Absolutely! You can cancel or update your reservations by navigating to
        your Dashboard and clicking on the "edit" button.{" "}
        <img src="img/arrow-up.svg" alt="arrow-up2" />
      </div>
      <div className="question3 questions">
        How can I add my restaurant/café to the system?
        <img src="img/down-arrow.svg" alt="arrow3" />
      </div>
      <div className="answer3 answers">
        It's very simple! All you have to do is contact us via email and we will
        reach out to you as soon as possible! You can do that{" "}
        <img src="img/arrow-up.svg" alt="arrow-up31" />{" "}
      </div>
    </div>
  );
}
};

export default Help;
