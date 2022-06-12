import React from "react";
import Marquee from "react-fast-marquee";

function MarqueeSlider() {
  const images = [
    "https://craft-store.ly/wp-content/uploads/2021/11/sigma.png",
    "https://craft-store.ly/wp-content/uploads/2021/09/sony.png",
    "https://craft-store.ly/wp-content/uploads/2021/09/zhi.png",
  ];

  return (
    <Marquee
      speed={100}
      gradientWidth={20}
      style={{
        height: "110px",
        marginBottom: "20px",
        marginTop: "2px",
        backgroundColor: "#f1f1f1",
      }}
    >
      {images.map((img) => (
        <img
          style={{ margin: "0 30px", cursor: "pointer" }}
          src={img}
          alt="pic"
        ></img>
      ))}
    </Marquee>
  );
}

export default MarqueeSlider;
