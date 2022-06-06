import React from "react";
import "./DevidText.css";
const DevideText = ({ text }) => {
  const array = text?.split(" ");
  const div1 = array?.slice(0, parseInt(array?.length / 2)).join(" ");
  const div2 = array
    .slice(parseInt(array?.length / 2), parseInt(array?.length))
    .join(" ");
  return (
    <p className="devidedTextstyle" style={{ fontWeight: 200 }}>
      {div1 + " "}
      <b style={{ fontWeight: 800 }}> {div2}</b>
    </p>
  );
};
export default React.memo(DevideText);
