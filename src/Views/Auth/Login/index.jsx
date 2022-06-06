import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import ButtonComponent from "../../../Components/ButtonComponent";
import LoginTemplate from "../../../Components/LoginTemplate";
import SquaredInput from "../../../Components/SquaredInput";
import { useDispatch, useSelector } from "react-redux";
import { CheckInputs } from "../../../Service/SharedApi/SharedFunctions";
import {
  auth_loading,
  auth_loggedin,
  userLogin,
} from "../../../Store/AuthReducer";
function Login() {
  const { t, i18n } = useTranslation();
  const defualtvalues = useRef({
    Password: "",
    UsernameOrEmail: "",
  });
  const [loading, setloading] = useState(false);
  const [values, setvalues] = useState(defualtvalues.current);
  const [error, seterror] = useState({});
  let selector = useSelector(auth_loading);
  let history = useHistory();
  let selector_user = useSelector(auth_loggedin);
  useEffect(() => setloading(selector), [selector]);
  useEffect(() => {
    selector_user && history.push("/dashboard");
  }, [selector_user]);

  const handleChange = useCallback((e) => {
    setvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);
  let dispatch = useDispatch();
  const submit = async (e) => {
    e.preventDefault();
    seterror(CheckInputs(values, error));
    if (Object.keys(CheckInputs(values, error)).length > 0) {
      return;
    }
    dispatch(
      await userLogin({
        UsernameOrEmail: values.UsernameOrEmail.trim(),
        Password: values.Password.trim(),
      })
    );
  };
  return (
    <LoginTemplate
      fist={{ rout: "/forget-password", text: "Forgot password?" }}
      second={{ rout: "/create-account", text: "Create an account" }}
    >
      <div>
        <form onSubmit={submit}>
          <div
            style={{
              textAlign: "center",
              fontSize: "30px",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            {t("Log in to your account")}
          </div>

          <SquaredInput
            label={"Username or E-mail"}
            handleChange={handleChange}
            name="UsernameOrEmail"
            value={values["UsernameOrEmail"]}
            required
            errorMessage={error.UsernameOrEmail}
            onBlur={() => seterror(CheckInputs(values, error))}
          />
          <SquaredInput
            label={"Password"}
            handleChange={handleChange}
            name="Password"
            required
            value={values["Password"]}
            type={"password"}
            errorMessage={error["Password"]}
            onBlur={() => seterror(CheckInputs(values, error))}
          />
          <ButtonComponent
            disable={
              Object.keys(error)
                .map((key, index) => error[key] !== "")
                .filter((e) => e).length > 0 || !values
            }
            title="Log In"
            type={"submit"}
            loading={loading}
          />
        </form>
      </div>
    </LoginTemplate>
  );
}

export default Login;
