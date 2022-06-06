import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

function LangueNavBar() {
  const { t, i18n } = useTranslation();
  return (
    <div
      className="hide-mobile"
      style={{
        height: 38,
        backgroundColor: "#5ba8dc",
        color: "white",
        padding: "8px 0",
        direction: i18n.language === "en" ? "ltr" : "rtl",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "auto",
        }}
        className="container"
      >
        <div> Welcome to our online store </div>{" "}
        <div>
          {" "}
          <a
            onClick={() =>
              i18n.changeLanguage(i18n.language == "en" ? "ar" : "en")
            }
          >
            {t("العربية")}
          </a>
        </div>
      </div>{" "}
    </div>
  );
}

export default LangueNavBar;
