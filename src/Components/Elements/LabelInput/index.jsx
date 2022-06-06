import React from "react";
import { useTranslation } from "react-i18next";
import "./LabelInput.css";
function LabelInput({
  handleChange,
  Label,
  Value,
  Name,
  type = "Text",
  placeholder = "",
}) {
  return (
    <div>
      <label className="form-label-input">{Label}</label>
      <input
        type={type}
        className="form-control"
        value={Value}
        name={Name}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default LabelInput;
