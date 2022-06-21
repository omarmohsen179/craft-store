import React, { useCallback, useEffect, useRef, useState } from "react";
import ButtonComponent from "../../../Components/ButtonComponent";
import SquaredInput from "../../../Components/SquaredInput";
// import UpperPage from "../../../Components/UpperPage";
import ContactUsForm from "./Components/ContactUsForm";
import ContactUslist from "./Components/ContactUslist";
import Intro from "./Components/Intro";
import "./ContactUs.scss";
function ContactUs() {
  const defaultValues = useRef({
    FirstName: "",
    LastName: "",
    Email: "",
    Message: "",
  });
  const [values, setValues] = useState(defaultValues.current);
  console.log(values);
  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  return (
    <div className="contact-us-cont">
      <div class="container contact">
        <div class="row">
          <div
            style={{
              boxShadow:
                " rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
              backgroundImage: `url("https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5pa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")`,
              // backgroundRepeat: "no-repeat",
              backgroundSize: "auto",
            }}
            div
            class="col-md-3"
          >
            <div class="contact-info">
              <img
                src="https://image.ibb.co/kUASdV/contact-image.png"
                alt="pic"
              />
              <h2>Contact Us</h2>
              <h4>We would love to hear from you !</h4>
            </div>
          </div>
          <div
            style={{
              boxShadow:
                " rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            }}
            class="col-md-9"
          >
            <div class="contact-form">
              <div class="form-group">
                <label class="control-label col-sm-2" for="fname">
                  First Name:
                </label>
                <div class="col-sm-10">
                  {/* <input
                    type="text"
                    class="form-control"
                    id="fname"
                    placeholder="Enter First Name"
                    name="fname"
                  /> */}
                  <SquaredInput
                    // label={"E-mail"}
                    handleChange={handleChange}
                    placeholder={"First Name"}
                    name="FirstName"
                    required
                    value={values["FirstName"]}
                    // errorMessage={error.Email}
                    // onBlur={CheckEmail}
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="lname">
                  Last Name:
                </label>
                <div class="col-sm-10">
                  <SquaredInput
                    // label={"E-mail"}
                    handleChange={handleChange}
                    placeholder={"Last Name"}
                    name="LastName"
                    required
                    value={values["LastName"]}
                    // errorMessage={error.Email}
                    // onBlur={CheckEmail}
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="email">
                  E-Mail:
                </label>
                <div class="col-sm-10">
                  <SquaredInput
                    // label={"E-mail"}
                    handleChange={handleChange}
                    placeholder={"E-Mail"}
                    name="Email"
                    required
                    value={values["Email"]}
                    // errorMessage={error.Email}
                    // onBlur={CheckEmail}
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="comment">
                  Message:
                </label>
                <div class="col-sm-10">
                  <textarea
                    onChange={handleChange}
                    name="Message"
                    class="country-input"
                    rows="5"
                    id="comment"
                  ></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  {/* <button type="submit" class="btn btn-default">
                    Submit
                  </button> */}
                  <ButtonComponent title="Submit" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
