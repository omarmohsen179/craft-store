import { React, useCallback, useRef, useState } from "react";
import DevidText from "../../../../Components/DevidText/DevidText";
import FormButton from "../../../../Components/Elements/FormButton";
import FormTextArea from "../../../../Components/Elements/FormTextArea";
import LabelInput from "../../../../Components/Elements/LabelInput";
import SquaredInput from "../../../../Components/SquaredInput";

function ContactUsForm() {
  const data = {
    Title: "SEND A MESSAGE",
    details:
      "When it comes to looking for the right place, you can trust Home Realtors can deliver the place you want.Whether you're in the market for residential or commercial real estate listings, our local realtors do their best to show a variety of listing that meets your needs and wants. Be sure to browse our current offerings. For years, our local real estate team has continued to assist clients throughout Big Spring, TX, Midland, TX, Colorado City, TX, Lamesa, TX, and all the surrounding communities. We've managed to streamline the standard real estate process, making it easier than ever to track down the perfect property! If you’re ready to start looking with a trustworthy and friendly staff of professionals, call us today. We are always ready to help make the process of buying your next home or selling your home as smooth and stress-free as possible",
  };
  const cols = useRef("col-lg-4 col-md-4 col-sm-12");

  const defualtvalues = useRef({
    Name: "",
    Phone: "",
    Email: "",
    Message: "",
  });
  const [values, setvalues] = useState(defualtvalues.current);
  const handleChange = useCallback((e) => {
    setvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  console.log(values);

  return (
    <div className="contact-us-form-container">
      <div className="contact-us-form container ">
        <br />
        <div className="title-MakeOurNumbers">
          <DevidText text={data.Title} />
        </div>

        <form className="row search-form-form client-form">
          <div className={cols.current}>
            {/* <LabelInput name={"Name"} Label={"Name"} placeholder={"Name"} /> */}
            <SquaredInput
              label={"Name"}
              handleChange={handleChange}
              name="Name"
              value={values["Name"]}
              required
              // errorMessage={error.FullName}
              // onBlur={CheckInputs(values, error)}
            />
          </div>
          <div className={cols.current}>
            <SquaredInput
              label={"Phone"}
              handleChange={handleChange}
              name="Phone"
              value={values["Phone"]}
              required
              // errorMessage={error.FullName}
              // onBlur={CheckInputs(values, error)}
            />
          </div>
          <div className={cols.current}>
            {" "}
            {/* <LabelInput
              name={"PhoneNumber"}
              Label={"Email"}
              placeholder={"Email Address"}
            /> */}
            <SquaredInput
              label={"E_Mail"}
              handleChange={handleChange}
              name="Email"
              value={values["Email"]}
              required
              // errorMessage={error.FullName}
              // onBlur={CheckInputs(values, error)}
            />
          </div>
          <div className="col-12 ">
            {" "}
            <label htmlFor="feDescription">Message</label>
            <textarea
              onChange={handleChange}
              name="Message"
              className="country-input"
              value={values["Message"]}
              style={{
                width: "100%",
                height: "15vh",
                marginTop: "5px",
              }}
            />
          </div>

          <div
            className="col-12"
            style={{
              marginTop: "20px",
            }}
          >
            <FormButton Label={"Send Message"} type={"Submit"} />
            <br />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUsForm;
