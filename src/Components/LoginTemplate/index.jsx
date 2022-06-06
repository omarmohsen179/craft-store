import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import "./style.css";
function LoginTemplate({
  fist = { rout: "", text: "" },
  second = { rout: "", text: "" },
  naviDiv = true,
  children,
}) {
  const { t, i18n } = useTranslation();
  let history = useHistory();
  return (
    <div
      className="login-container"
      style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}
    >
      <div
        className="login-form-window"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div>
          {children}
          {naviDiv ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between ",
                paddingTop: "20px",
              }}
            >
              <div onClick={() => history.push(fist.rout)}>
                <p className="underline-text-hover"> {t(fist.text)}</p>
              </div>
              <div
                onClick={() => history.push(second.rout)}
                style={{ display: "flex", justifyContent: "end" }}
              >
                <p className="underline-text-hover">{t(second.text)}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default LoginTemplate;
