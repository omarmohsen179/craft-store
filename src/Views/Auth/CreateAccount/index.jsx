import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import SquaredInput from "../../../Components/SquaredInput";
import { useHistory } from "react-router-dom";
import LoginTemplate from "../../../Components/LoginTemplate";
import { useRef } from "react";
import { CHECK_EMAIL, CHECK_USERNAME, CREATE_ACCOUNT } from "./Api";
import {
  CheckInputs,
  validateEmail,
} from "../../../Service/SharedApi/SharedFunctions";
import ButtonComponent from "../../../Components/ButtonComponent";
import { text } from "../../../styles/constant";
function CreateAccount() {
  const { t, i18n } = useTranslation();
  const defualtvalues = useRef({
    FullName: "",
    CPassword: "",
    Username: "",
    Password: "",
    Email: "",
  });
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState({});
  const [Text, settext] = useState("");

  let history = useHistory();
  const [values, setvalues] = useState(defualtvalues.current);
  const handleChange = useCallback((e) => {
    setvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const CheckEmail = useCallback(async (e) => {
    if (!validateEmail(e.target.value)) {
      seterror((prev) => ({ ...prev, Email: "e-mail is not valid" }));
      return;
    }
    await CHECK_EMAIL(e.target.value)
      .then((res) => {
        seterror((prev) => ({ ...prev, Email: "e-mail has been taken" }));
      })
      .catch(() => {
        seterror({ ...error, Email: "" });
      });
  }, []);

  const CheckUsername = useCallback(async (e) => {
    if (e.target.value.includes(" ")) {
      seterror((prev) => ({
        ...prev,
        Username: "Invalid username",
      }));
      return;
    }
    await CHECK_USERNAME(e.target.value)
      .then((res) => {
        seterror((prev) => ({
          ...prev,
          Username: "username has been taken",
        }));
      })
      .catch(() =>
        seterror((prev) => ({
          ...prev,
          Username: "",
        }))
      );
  }, []);

  const submit = async (e) => {
    e.preventDefault();

    if (error.Username || error.Email || error.CPassword) {
      return;
    }
    seterror(CheckInputs(values, error));
    if (Object.keys(CheckInputs(values, error)).length > 0) {
      return;
    }
    setloading(true);
    await CREATE_ACCOUNT(values)
      .then((res) => {
        settext(res);
        setloading(false);
      })
      .catch(() => setloading(false));
  };

  return (
    <LoginTemplate
      second={{ text: "Already have an account", rout: "/log-in" }}
    >
      {Text ? (
        <div
          style={{
            textAlign: "center",
            fontSize: "30px",
            paddingTop: "20px",
            paddingBottom: "20px",
            color: text,
          }}
        >
          {t(Text)}
        </div>
      ) : (
        <>
          <form onSubmit={submit}>
            <div
              style={{
                textAlign: "center",
                fontSize: "30px",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              {t("Create new account")}
            </div>

            <SquaredInput
              label={"Full Name"}
              handleChange={handleChange}
              name="FullName"
              value={values["FullName"]}
              required
              errorMessage={error.FullName}
              onBlur={CheckInputs(values, error)}
            />
            <SquaredInput
              label={"Username"}
              handleChange={handleChange}
              name="Username"
              required
              value={values["Username"]}
              errorMessage={error["Username"]}
              onBlur={CheckUsername}
            />
            <SquaredInput
              label={"E-mail"}
              handleChange={handleChange}
              name="Email"
              required
              value={values["Email"]}
              errorMessage={error.Email}
              onBlur={CheckEmail}
            />
            <SquaredInput
              label={"Password"}
              handleChange={handleChange}
              name="Password"
              value={values["Password"]}
              errorMessage={error.Password}
              onBlur={CheckInputs(values, error)}
            />
            <SquaredInput
              label={"Confirm Password"}
              handleChange={handleChange}
              name="CPassword"
              value={values["CPassword"]}
              errorMessage={error.CPassword}
              onBlur={(e) =>
                seterror((prev) => ({
                  ...prev,
                  CPassword:
                    values.Password === e.target.value
                      ? ""
                      : "does not match the password",
                }))
              }
            />
            <ButtonComponent
              disable={
                Object.keys(error)
                  .map((key, index) => error[key] !== "")
                  .filter((e) => e).length > 0 || !values
              }
              title="Create"
              type={"submit"}
              loading={loading}
            />
          </form>
        </>
      )}
    </LoginTemplate>
  );
}

export default CreateAccount;
