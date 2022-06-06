import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CONFIRM } from "./Api";

import { useTranslation } from "react-i18next";
import { text } from "../../../styles/constant";
import queryString from "query-string";
import LoginTemplate from "../../../Components/LoginTemplate";
import ButtonComponent from "../../../Components/ButtonComponent";
import { useHistory } from "react-router-dom";
function EmailConfirmation(props) {
  const { t, i18n } = useTranslation();

  let history = useHistory();
  let [Text, setText] = useState("");
  const [Loading, setLoading] = useState(true);
  let submit = useCallback(async (e) => {
    setLoading(true);
    await CONFIRM({ value: e })
      .then((res) => {
        setText(res);
      })
      .catch((err) => {
        setText(err);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    let value = queryString.parse(props.location.search);
    if (!value.token) {
      history.push("/");
    }
    if (value.token) {
      submit(value.token);
    }
  }, [props.location.search, submit]);

  return (
    <LoginTemplate>
      <div
        className="loginWidnow"
        style={{
          direction: i18n.language === "en" ? "ltr" : "rtl",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: text, padding: "20px 0px" }}>{t(Text)}</h1>
        <div className="w-100 d-flex justify-content-center">
          <ButtonComponent
            title="Log In"
            onClick={() => history.push("/log-in")}
            loading={Loading}
          />
        </div>
      </div>
    </LoginTemplate>
  );
}

export default EmailConfirmation;
