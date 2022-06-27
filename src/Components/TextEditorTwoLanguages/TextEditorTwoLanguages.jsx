import React from "react";
import { FormGroup } from "reactstrap";
import TextEditor from "../TextEditor/TextEditor";

const TextEditorTwoLanguages = ({
  id,
  label,
  value,
  valueEn,
  onValueChange,
}) => {
  return (
    <>
      <FormGroup>
        <label>{label}</label>
        <TextEditor
          id={id}
          value={value}
          onSaveHandle={(value, id) => onValueChange(value, id)}
        />
      </FormGroup>
      <FormGroup>
        <label>{label} English</label>
        <TextEditor
          id={id + "En"}
          value={valueEn}
          onSaveHandle={(value, id) => onValueChange(value, id)}
        />
      </FormGroup>
    </>
  );
};

export default TextEditorTwoLanguages;
