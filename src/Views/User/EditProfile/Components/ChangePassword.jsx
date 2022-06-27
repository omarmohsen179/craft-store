import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
} from "shards-react";
import "react-phone-number-input/style.css";
import SquaredInput from "../../../../Components/SquaredInput";
import ButtonComponent from "../../../../Components/ButtonComponent";

import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import PhoneInput from "react-phone-number-input";

const ChangePassword = ({ title }) => {
  const defualtvalues = useRef({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    Address: "",
    City: "",
    State: "",
    Zip: "",
    Description: "",
  });
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState({});
  const [values, setvalues] = useState(defualtvalues.current);
  // const [values, setvalues] = useState(
  //   JSON.parse(localStorage.getItem("inputs"))
  // );
  const handleChange = useCallback((e) => {
    setvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">{"Change Password"}</h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Col md="122" lg={"12"} className="form-group">
            {/* <label htmlFor="fePassword">Password</label> */}
            <SquaredInput
              label={"Current Password"}
              handleChange={handleChange}
              name="current_password"
              value={values["password"]}
              required
              errorMessage={error.password}
              // onBlur={CheckInputs(values, error)}
            />
          </Col>{" "}
          <Col md="122" lg={"12"} className="form-group">
            {/* <label htmlFor="fePassword">Password</label> */}
            <SquaredInput
              label={"Password"}
              handleChange={handleChange}
              name="password"
              value={values["password"]}
              required
              errorMessage={error.password}
              // onBlur={CheckInputs(values, error)}
            />
            <SquaredInput
              label={"Confirm Password"}
              handleChange={handleChange}
              name="password"
              value={values["password"]}
              required
              errorMessage={error.password}
              // onBlur={CheckInputs(values, error)}
            />
          </Col>
          {/* <button style={{border:"1px solid black", borderRadius:"5px",backgroundColor:"blue", color:"white"}}>Update Account</button> */}
          <ButtonComponent
            onClick={handleSubmit}
            type="submit"
            title={"Update Profile"}
          />
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default ChangePassword;
