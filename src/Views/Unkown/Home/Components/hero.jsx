import { Anchor, Button, Carousel, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import Image from "../../../../Components/Image";
import REQUEST from "../../../../Service/Request.js";

const { Link } = Anchor;

const AppHero = ({ t, i18n = {} }) => {
  const data = [
    {
      ImagePath:
        "https://craft-store.ly/wp-content/uploads/2022/04/Artboard-1-8.png",
      Title: "here",
      Description: "here1",
    },
    {
      ImagePath:
        "	https://craft-store.ly/wp-content/uploads/2022/04/Artboard-1-copy-4-8.png",
      Title: "here1",
      Description: "here1",
    },
    {
      ImagePath:
        "	https://craft-store.ly/wp-content/uploads/2022/04/Artboard-1-copy-2-8.png",
      Title: "here1",
      Description: "here",
    },
  ];

  const [dataa, setDataa] = useState();

  let config = {
    method: "GET",
    url: "api/",
  };

  REQUEST(config)
    .then((response) => setDataa(response))
    .catch((error) => console.log(error));

  return (
    <>
      <div className="heroBlock  ">
        <OwlCarousel
          //stageclassName={"container owl-stage-outerx"}

          items={1}
          // autoplay={true}
          className="owl-theme"
          loop
          margin={90}
          nav
          navText={[
            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>",
          ]}
        >
          {data.map((ele, index) => (
            <div key={index} style={{ maxHeight: "70vh", width: "100%" }}>
              <Image src={ele.ImagePath} />
            </div>
          ))}
        </OwlCarousel>
      </div>
    </>
  );
};

export default React.memo(AppHero);
