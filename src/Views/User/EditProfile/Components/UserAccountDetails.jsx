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

const UserAccountDetails = ({ title }) => {
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

  // localStorage.setItem("inputs", JSON.stringify(values));

  const [country, setCountry] = useState();
  const [region, setRegion] = useState();

  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">{title}</h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form>
                <Row form>
                  {/* First Name */}
                  <Col md="12" lg={"12"} className="form-group name-inputs">
                    <div
                      className="row"
                      style={{
                        width: "100%",
                        margin: 0,
                      }}
                    >
                      <div style={{ padding: 0 }} className="col-6">
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
                      <div className="col-6">
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

                    <Col md="12" lg={"12"} className="form-group"></Col>
                  </Col>
                </Row>
                <Row form>
                  {/* Email */}
                  <Col md="12" lg={"12"} className="form-group">
                    <SquaredInput
                      label={"E-Mail"}
                      handleChange={handleChange}
                      name="email"
                      value={values["email"]}
                      required
                      errorMessage={error.FullName}
                      // onBlur={CheckInputs(values, error)}
                    />
                  </Col>
                  <Col md="12" lg={"12"} className="form-group">
                    <PhoneInput
                      placeholder="Enter phone number"
                      value={values["phone_number"]}
                      onChange={(e) =>
                        handleChange({
                          target: { name: "phone_number", value: e },
                        })
                      }
                    />
                  </Col>

                  {/* Password */}
                </Row>
                <Row form>
                  {/* City */}
                  {/* State */}
                  <Col md="12" lg={"12"} className="form-group ">
                    <label htmlFor="feInputState">Country / Region</label>
                    <div
                      className="row"
                      style={{
                        width: "100%",
                        margin: 0,
                      }}
                    >
                      <div style={{ padding: 0 }} className="col-6">
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
                      <div className="col-6">
                        <RegionDropdown
                          name="State"
                          disableWhenEmpty={true}
                          country={country}
                          value={region}
                          classes="country-input"
                          onChange={(val, e) => {
                            setRegion(val);
                            handleChange(e);
                          }}
                        />
                      </div>
                    </div>
                  </Col>
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
                  </Col>
                  {/* <button style={{border:"1px solid black", borderRadius:"5px",backgroundColor:"blue", color:"white"}}>Update Account</button> */}
                  <ButtonComponent
                    onClick={handleSubmit}
                    type="submit"
                    title={"Update Profile"}
                  />
                </Row>
              </Form>
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
