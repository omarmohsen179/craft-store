import React from "react";
import "./Image.css";
import { ApiBaseUrl } from "../../Service/config";
const Image = ({ src, className }) => {
  return (
    <div
    // className={"image-cover-style " + className}
    // style={{ backgroundImage: "url(" + src + ")" }}
    >
      <img
        className="img"
        src={src.includes("static") ? ApiBaseUrl + src : src}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Image;
