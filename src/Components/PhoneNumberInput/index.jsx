import React from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import "./index.css";
const PhoneNumberInput = ({
  value,
  placeholder,
  handleChange,
  name,
  label,
}) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div style={{ direction: "ltr" }}>
        <div className="squared-input-container">
          <label id="domain-label">{t(label)}</label>
          <PhoneInput
            country={"eg"}
            placeholder={placeholder}
            value={value ? value : ""}
            onChange={(e) =>
              handleChange({
                target: { name, value: e },
              })
            }
            containerStyle={"PhoneInputInput-2"}
            style={{ marginRight: "0em" }}
          />
        </div>
      </div>
    </>
  );
};

export default PhoneNumberInput;
