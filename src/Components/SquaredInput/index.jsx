import React from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
function SquaredInput({
  label,
  name,
  value,
  type = "text",
  handleChange,
  required,
  errorMessage = "",
  onBlur,
  placeholder,
}) {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}>
      <div className="squared-input-container">
        <label id="domain-label">{t(label)}</label>
        <input
          onChange={handleChange}
          type={type}
          onBlur={onBlur}
          name={name}
          value={value}
          placeholder={placeholder}
        />

        {errorMessage ? (
          <div className="error-text">{t(errorMessage)}</div>
        ) : null}
      </div>
    </div>
  );
}

export default SquaredInput;
