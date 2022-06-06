import React, { useEffect } from "react";
// import UpperPage from "../../../Components/UpperPage";
import ContactUsForm from "./Components/ContactUsForm";
import ContactUslist from "./Components/ContactUslist";
import Intro from "./Components/Intro";
import "./ContactUs.scss";
function ContactUs() {
  return (
    <div
      style={{
        padding: "50px",
        // backgroundColor: "aqua",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        margin: "50px 20px",
        marginTop: "150px",
      }}
      className="main-cont"
    >
      {/* <UpperPage Title={"Contact Us"} /> */}
      {/* <Intro />
      <ContactUslist />
      <ContactUsForm /> */}

      <div class="contact-container">
        <div class="left-col"></div>
        <div class="right-col">
          <h1>Contact us</h1>
          <p>
            Planning to visit Indonesia soon? Get insider tips on where to go,
            things to do and find best deals for your next adventure.
          </p>

          <form id="contact-form" method="post">
            <label for="name">Full name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Address"
              required
            />
            <label for="message">Message</label>
            <textarea
              rows="6"
              placeholder="Your Message"
              id="message"
              name="message"
              required
            ></textarea>
            {/* <!--<a href="javascript:void(0)">--><button type="submit" id="submit" name="submit">Send</button><!--</a>--> */}
          </form>
          <div id="error"></div>
          <div id="success-msg"></div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
