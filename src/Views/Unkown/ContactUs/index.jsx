import { useCallback, useRef, useState } from "react";
import ButtonComponent from "../../../Components/ButtonComponent";
import SquaredInput from "../../../Components/SquaredInput";
// import UpperPage from "../../../Components/UpperPage";
import { validate } from "react-email-validator";
import "./ContactUs.scss";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { PostContactUs } from "./api";
import { useTranslation } from "react-i18next";
import PhoneNumberInput from "../../../Components/PhoneNumberInput";
import TextArea from "../../../Components/TextArea";

function ContactUs() {
  const defaultValues = useRef({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
    phone_number: "",
  });
  const [values, setValues] = useState(defaultValues.current);
  const { t, i18n } = useTranslation();
  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
            className="col-md-9"
          >
            <div className="contact-form">
              <div>
                <SquaredInput
                  label={"First Name"}
                  handleChange={handleChange}
                  name="first_name"
                  required
                  value={values["first_name"]}
                />
              </div>

              <div>
                <SquaredInput
                  label={"Last Name"}
                  handleChange={handleChange}
                  name="last_name"
                  required
                  value={values["last_name"]}
                />
              </div>
              <div>
                <SquaredInput
                  label={"E-mail"}
                  handleChange={handleChange}
                  name="email"
                  required
                  value={values["email"]}
                  onBlur={() => setValid(validate(values["email"]))}
                  onFocus={() => setValid(true)}
                />
              </div>
              <div>
                <PhoneNumberInput
                  value={values["phone_number"]}
                  handleChange={handleChange}
                  name={"phone_number"}
                  label={"Phone Number"}
                />
              </div>
              <TextArea
                label={"Message"}
                handleChange={handleChange}
                name="message"
                value={values["message"]}
              />
              <ButtonComponent title="Submit" onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
