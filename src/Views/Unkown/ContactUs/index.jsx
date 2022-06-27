import { useCallback, useRef, useState } from "react";
import ButtonComponent from "../../../Components/ButtonComponent";
import SquaredInput from "../../../Components/SquaredInput";
// import UpperPage from "../../../Components/UpperPage";
import { validate } from "react-email-validator";
import "./ContactUs.scss";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { PostContactUs } from "./api";

function ContactUs() {
  const defaultValues = useRef({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
    phone_number: "",
  });
  const [values, setValues] = useState(defaultValues.current);

  const handleChange = useCallback((e) => {
    typeof e === "object"
      ? setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
      : setValues((prev) => ({ ...prev, phone_number: e }));
  }, []);

  const [valid, setValid] = useState(true);

  function handleSubmit() {
    PostContactUs(values);
  }

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
                <label class="control-label col-lg-5" for="fname">
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
                    name="first_name"
                    required
                    value={values["first_name"]}
                    // errorMessage={error.email}
                    // onBlur={Checkemail}
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-lg-5" for="lname">
                  Last Name:
                </label>
                <div class="col-sm-10">
                  <SquaredInput
                    // label={"E-mail"}
                    handleChange={handleChange}
                    placeholder={"Last Name"}
                    name="last_name"
                    required
                    value={values["last_name"]}
                    // errorMessage={error.email}
                    // onBlur={Checkemail}
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-lg-5" for="email">
                  E-Mail:
                </label>
                <div class="col-sm-10">
                  <SquaredInput
                    // label={"E-mail"}
                    handleChange={handleChange}
                    placeholder={"E-Mail"}
                    name="email"
                    required
                    value={values["email"]}
                    // errorMessage={error.email}
                    // onBlur={Checkemail}
                    onBlur={() => setValid(validate(values["email"]))}
                    onFocus={() => setValid(true)}
                  />
                  {!valid && <h5 style={{ color: "red" }}>Invalid E-Mail!</h5>}
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-lg-5" for="email">
                  Phone Number:
                </label>
                <div class="col-sm-10">
                  <PhoneInput
                    country={"eg"}
                    value={values["phone_number"]}
                    onChange={(e) => handleChange(e)}
                    inputStyle={{
                      display: "block",

                      // padding: "10px",
                      width: "100%",
                      backgroundColor: "white",
                      border: "1px solid #d7dbe0",
                      borderRadius: "3px",
                      color: " #5c5c5c",
                      outline: 0,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      verticalAlign: "top",
                      fontSize: "1em",
                      lineHeight: "1.25em",
                    }}

                    // inputProps={{
                    //   name: "phone_number",
                    // }}
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-lg-5" for="comment">
                  message:
                </label>
                <div class="col-sm-10">
                  <textarea
                    onChange={handleChange}
                    name="message"
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
                  <ButtonComponent title="Submit" onClick={handleSubmit} />
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
