import React from "react";
import "./LoadingAnimation.css";

function LoadingAnimation() {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        right: "50%",
        marginTop: "20%",
        width: "80%",
      }}
      className="ring-of-dots"
    ></div>
  );
}
export default LoadingAnimation;
