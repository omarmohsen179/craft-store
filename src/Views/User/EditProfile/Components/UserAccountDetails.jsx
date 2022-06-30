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
import PhoneInput from "react-phone-input-2";
import { LoadPanel } from "devextreme-react/load-panel";
import "react-phone-number-input/style.css";
import SquaredInput from "../../../../Components/SquaredInput";
import ButtonComponent from "../../../../Components/ButtonComponent";

import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import PhoneNumberInput from "../../../../Components/PhoneNumberInput";
import { useTranslation } from "react-i18next";
import { EDIT_PROFILE, USER_DATA } from "../api";
//import PhoneInput from "react-phone-number-input";

const UserAccountDetails = ({ title, setloading }) => {
  const defualtvalues = useRef({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  });
  const [error, seterror] = useState({});
  const [values, setvalues] = useState(defualtvalues.current);
  useEffect(() => {
    setloading(true);
    USER_DATA()
      .then((res) => setvalues(res))
      .catch(() => alert(t("Error! Try Again later")))
      .finally(() => setloading(false));
  }, []);
  const handleChange = useCallback((e) => {
    setvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  function handleSubmit(e) {
    // e.preventDefault();
    if (
      !values.email ||
      !values.username ||
      !values.password ||
      !values.email
    ) {
      alert(t("Fill the inputs"));
      return;
    }
    setloading(true);
    EDIT_PROFILE(values)
      .then(() => alert(t("Saved Successfully")))
      .catch((error) => alert(t(error.detail)))
      .finally(() => setloading(false));
  }
  const [country, setCountry] = useState();
  const [region, setRegion] = useState();
  const { t, i18n } = useTranslation();

  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">{t(title)}</h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <div
                id={"load-test-div"}
                style={{
                  width: "100%",

                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ width: "48%" }}>
                  <SquaredInput
                    label={"First Name"}
                    handleChange={handleChange}
                    name="first_name"
                    value={values["first_name"]}
                    required
                    errorMessage={error.FullName}
                    // onBlur={CheckInputs(values, error)}
                  />
                </div>
                <div style={{ width: "48%" }}>
                  <SquaredInput
                    label={"Last Name"}
                    handleChange={handleChange}
                    name="last_name"
                    value={values["last_name"]}
                    required
                    errorMessage={error.FullName}
                    // onBlur={CheckInputs(values, error)}
                  />
                </div>
              </div>
              {/* Last Name */}

              {/* Email */}
              <Col md="12" lg={"12"} className="form-group">
                <SquaredInput
                  label={"E-Mail"}
                  handleChange={handleChange}
                  name="email"
                  value={values["email"]}
                  required
                  errorMessage={error.email}
                  // onBlur={CheckInputs(values, error)}
                />
              </Col>
              <PhoneNumberInput
                value={values["phone_number"]}
                handleChange={handleChange}
                name={"phone_number"}
                label={"Phone Number"}
              />

              <label htmlFor="feInputState">Country / Region</label>
              <div
                style={{
                  width: "100%",
                  margin: 0,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ width: "48%" }}>
                  <CountryDropdown
                    name="City"
                    classes="country-input"
                    value={country}
                    onChange={(val, e) => {
                      setCountry(val);
                      handleChange(e);
                    }}
                  />
                </div>
                <div style={{ width: "48%" }}>
                  <RegionDropdown
                    name="State"
                    disableWhenEmpty={true}
                    country={country}
                    value={region}
                    classes="country-input right-padding"
                    onChange={(val, e) => {
                      setRegion(val);
                      handleChange(e);
                    }}
                  />
                </div>
              </div>

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

              {/* <button style={{border:"1px solid black", borderRadius:"5px",backgroundColor:"blue", color:"white"}}>Update Account</button> */}
              <ButtonComponent onClick={handleSubmit} title={"Save"} />
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
};

UserAccountDetails.defaultProps = {
  title: "Account Details",
};

export default UserAccountDetails;
