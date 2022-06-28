import React from "react";
import { useTranslation } from "react-i18next";

function TextArea({ label, name, value, handleChange, required, placeholder }) {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}>
      <div>
        <label>{label}</label>
        <div>
          <textarea
            onChange={handleChange}
            name={name}
            value={value}
            className="country-input"
            placeholder={placeholder}
            required={required}
            rows={5}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default TextArea;
