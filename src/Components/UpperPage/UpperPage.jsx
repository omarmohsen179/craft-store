import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./UpperPages.css";
import back from "../../Assets/Navigation/shared.jpg";
function UpperPage({
  Title,
  Description,
  BackgroundImage = back,
  Height = "400px",
  centrilze = "180px",
}) {
  return (
    <div
      className="header__image2"
      style={{
        backgroundImage: "url(" + BackgroundImage + ")",
        minHeight: Height,
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(40 87 163 / 35%)",
          display: "inherit",
          minHeight: Height,
        }}
      >
        <NavigationBar />
        <div className="Text-container-Upper2" style={{ marginTop: centrilze }}>
          <div className="Upper-title">{Title}</div>
          {Description ? <p className="Upper-details">{Description}</p> : null}
        </div>
      </div>
    </div>
  );
}

export default UpperPage;
