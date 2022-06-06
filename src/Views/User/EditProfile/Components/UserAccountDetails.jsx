import React, { useCallback, useRef, useState } from "react";
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
import SquaredInput from "../../../../Components/SquaredInput";
import ButtonComponent from "../../../../Components/ButtonComponent";

import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

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

  console.log(values);

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
                          name="FirstName"
                          value={values["FirstName"]}
                          required
                          errorMessage={error.FullName}
                          // onBlur={CheckInputs(values, error)}
                        />
                      </div>
                      <div className="col-6">
                        <SquaredInput
                          label={"Last Name"}
                          handleChange={handleChange}
                          name="LastName"
                          value={values["LastName"]}
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
                      name="Email"
                      value={values["Email"]}
                      required
                      errorMessage={error.FullName}
                      // onBlur={CheckInputs(values, error)}
                    />
                  </Col>
                  {/* Password */}
                  <Col md="122" lg={"12"} className="form-group">
                    {/* <label htmlFor="fePassword">Password</label> */}
                    <SquaredInput
                      label={"Password"}
                      handleChange={handleChange}
                      name="Password"
                      value={values["Password"]}
                      required
                      errorMessage={error.FullName}
                      // onBlur={CheckInputs(values, error)}
                    />
                  </Col>
                </Row>
                <FormGroup>
                  {/* <label htmlFor="feAddress">Address</label> */}
                  <SquaredInput
                    label={"Address"}
                    handleChange={handleChange}
                    name="Address"
                    value={values["Address"]}
                    required
                    errorMessage={error.FullName}
                    // onBlur={CheckInputs(values, error)}
                  />
                </FormGroup>
                <Row form>
                  {/* City */}
                  <Col md="12" lg={"12"} className="form-group">
                    {/* <label htmlFor="feCity">City</label> */}
                    {/* <SquaredInput
                      label={"City"}
                      handleChange={handleChange}
                      name="City"
                      value={values["City"]}
                      required
                      errorMessage={error.FullName}
                      // onBlur={CheckInputs(values, error)}
                    /> */}
                  </Col>
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
                  {/* Zip Code */}
                  <Col md="12" lg={"12"} className="form-group">
                    {/* <label htmlFor="feZipCode">Zip</label> */}
                    <SquaredInput
                      label={"Zip"}
                      handleChange={handleChange}
                      name="Zip"
                      value={values["Zip"]}
                      required
                      errorMessage={error.FullName}
                      // onBlur={CheckInputs(values, error)}
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* Description */}
                  <Col md="12" className="form-group">
                    <label htmlFor="feDescription">Description</label>
                    <textarea
                      onChange={handleChange}
                      name="Description"
                      className="country-input"
                      value={values["Description"]}
                      style={{
                        width: "100%",
                        height: "15vh",
                        marginTop: "5px",
                      }}
                    />
                  </Col>
                </Row>
                {/* <button style={{border:"1px solid black", borderRadius:"5px",backgroundColor:"blue", color:"white"}}>Update Account</button> */}
                <ButtonComponent
                  onClick={handleSubmit}
                  type="submit"
                  title={"Update Profile"}
                />
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
