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
import { useTranslation } from "react-i18next";
import { CHANGE_PASSWORD } from "../api";

const ChangePassword = ({ title, setloading }) => {
  const defualtvalues = useRef({
    password: "",
    current_password: "",
    confirm_password: "",
  });

  const [error, seterror] = useState({});
  const [values, setvalues] = useState(defualtvalues.current);
  const handleChange = useCallback((e) => {
    setvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  function handleSubmit(e) {
    if (
      !values.password ||
      !values.confirm_password ||
      !values.current_password
    ) {
      alert(t("Fill the inputs"));
      return;
    }
    if (values.password !== values.confirm_password) {
      alert(t("Password Does not match"));
      return;
    }
    if (values.password === values.current_password) {
      alert(t("old password and new password can't be the same"));
      return;
    }
    CHANGE_PASSWORD(values)
      .then(() => {
        alert(t("Saved Successfully"));
        setvalues({ ...defualtvalues.current });
      })
      .catch((error) => alert(t(error.detail)))
      .finally(() => setloading(false));
  }
  const { t, i18n } = useTranslation();
  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">{t("Change Password")}</h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Col md="122" lg={"12"} className="form-group">
            {/* <label htmlFor="fePassword">Password</label> */}
            <SquaredInput
              label={"Current Password"}
              handleChange={handleChange}
              name="current_password"
              value={values["current_password"]}
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
              name="confirm_password"
              value={values["confirm_password"]}
              required
              errorMessage={error.password}
              // onBlur={CheckInputs(values, error)}
            />
          </Col>
          {/* <button style={{border:"1px solid black", borderRadius:"5px",backgroundColor:"blue", color:"white"}}>Update Account</button> */}
          <ButtonComponent
            onClick={handleSubmit}
            type="submit"
            title={"Save"}
          />
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default ChangePassword;
