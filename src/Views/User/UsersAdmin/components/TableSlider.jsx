import { Anchor, Button, Carousel, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { ApiBaseUrl } from "../../../../Service/config";
import REQUEST from "../../../../Service/Request.js";

function TableSlider() {
  const dataa = [
    {
      image_path:
        "https://craft-store.ly/wp-content/uploads/2022/04/Artboard-1-8.png",
      Title: "here",
      Description: "here1",
    },
    {
      image_path:
        "	https://craft-store.ly/wp-content/uploads/2022/04/Artboard-1-copy-4-8.png",
      Title: "here1",
      Description: "here1",
    },
    {
      image_path:
        "	https://craft-store.ly/wp-content/uploads/2022/04/Artboard-1-copy-2-8.png",
      Title: "here1",
      Description: "here",
    },
  ];

  const [data, setData] = useState();
  //   console.log(data);

  //   useEffect(() => {
  //     let config = {
  //       method: "GET",
  //       url: "home_slider",
  //     };

  //     REQUEST(config)
  //       .then((response) => setData(response))
  //       .catch((error) => console.log(error));
  //   }, []);

  return (
    <div className="heroBlock">
      {dataa && (
        <OwlCarousel
          //stageclassName={"container owl-stage-outerx"}
          items={1}
          animateIn={true}
          autoplay={false}
          className="owl-theme"
          loop
          // margin={90}
          dots={true}
          nav
          navText={[
            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>",
          ]}
        >
          {dataa &&
            dataa.map((ele, index) => (
              <div key={index} style={{ height: "12vh", width: "100%" }}>
                {/* <Image src={ele.image_path} /> */}
                <img
                  //   src={ApiBaseUrl + ele.image_path}
                  src={ele.image_path}
                  style={{
                    height: "12vh",
                    width: "100%",
                    objectFit: "contain",
                    // objectFit: "fill",
                    // padding: "0 5px",
                  }}
                  alt=""
                ></img>
              </div>
            ))}
        </OwlCarousel>
      )}
    </div>
  );
}
export default TableSlider;
