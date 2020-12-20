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

  const [showAnswer1, setAnswer1] = useState(false);
  const [showAnswer2, setAnswer2] = useState(false);
  const [showAnswer3, setAnswer3] = useState(false);
 

  return (
    <div>
    <h1 className="faq-head">Frequently Asked Questions</h1>
    <div className="help-container">
      <div className="faq">
        <div
          onClick={() => setAnswer1(!showAnswer1)}
          className="question1 questions"
        >
          Can I use the service without an account?{" "}
          <img src="img/down-arrow.svg" alt="arrow2" />
        </div>
        <div
          id={showAnswer1 ? "show-answer" : ""}
          onClick={() => setAnswer1(!showAnswer1)}
          className="answer1 answers"
        >
          Unfortunately without an account, you won't be able to make a
          reservation. However you can see what's available!
          <img src="img/arrow-up.svg" alt="arrow-up1" />
        </div>
        <div className="faq-2">
          <div
            onClick={() => setAnswer2(!showAnswer2)}
            className="question2 questions"
          >
            Can I modify my reservation if I change my mind?
            <img src="img/down-arrow.svg" alt="arrow2" />
          </div>
          <div
            id={showAnswer2 ? "show-answer" : ""}
            onClick={() => setAnswer2(!showAnswer2)}
            className="answer2 answers"
          >
            Absolutely! You can cancel or update your reservations by navigating
            to your Dashboard and clicking on the "edit" button.
            <img src="img/arrow-up.svg" alt="arrow-up2" />
          </div>
        </div>
        <div className="faq-3">
          <div
            onClick={() => setAnswer3(!showAnswer3)}
            className="question3 questions"
          >
            How can I add my restaurant/café to the system?
            <img src="img/down-arrow.svg" alt="arrow3" />
          </div>
          <div  id={showAnswer3 ? "show-answer" : ""}
            onClick={() => setAnswer3(!showAnswer3)}
           className="answer3 answers">
            It's very simple! All you have to do is contact us via email and we
            will reach out to you as soon as possible!
            <img src="img/arrow-up.svg" alt="arrow-up31" />
          </div>
        </div>
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
    </div>
  );
}

export default Help;
