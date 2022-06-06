import React from "react";
import "./FormButton.css";
const FormButton = ({ type, Label }) => {
  return (
    <div>
      <button className="form-button-element" type={type}>
        {Label}
      </button>
    </div>
  );
};

export default FormButton;
