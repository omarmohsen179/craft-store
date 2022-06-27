import { React, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { ApiBaseUrl } from "../../../../Service/config";
import { getSliderData, GET_SLIDER_DATA } from "./Api";

function MarqueeSlider() {
  const [images, setImages] = useState();

  useEffect(() => {
    GET_SLIDER_DATA().then((res) => setImages(res));
  }, []);

  return (
    <Marquee
      speed={100}
      gradientWidth={20}
      pauseOnHover
      style={{
        height: "110px",
        marginBottom: "20px",
        marginTop: "2px",
        backgroundColor: "#f1f1f1",
      }}
    >
      {images &&
        images.map((el) => (
          <a style={{ width: "18%", height: "110px" }} href={el.link}>
            <img
              style={{
                margin: "0 30px",
                cursor: "pointer",
                height: "110px",
                // width: "15%",
              }}
              src={`${ApiBaseUrl}` + el.image_path}
              alt="pic"
            ></img>
          </a>
        ))}
    </Marquee>
  );
}

export default MarqueeSlider;
