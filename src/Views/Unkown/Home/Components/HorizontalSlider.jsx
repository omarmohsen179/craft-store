import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import OwlCarousel from "react-owl-carousel";
import ProductCard from "../../../../Components/ProductCard";
import TitleHeader from "../../../../Components/TitleHeader";
import { ITEMS } from "../../../User/Categories/api";

function HorizontalSlider() {
  const [data, setData] = useState();

  useEffect(() => {
    // Get items
    ITEMS().then((res) => setData(res.data));
  }, []);
  const { t, i18n } = useTranslation();
  return (
    <div className="hor-slide max-width">
      <div>
        <TitleHeader title={t("New")} details={"Item"} shaded={"Trendy"} />
      </div>
      {data && (
        <OwlCarousel
          //stageclassName={"container owl-stage-outerx"}

          items={5}
          //autoplay={true}   loop
          className="owl-theme"
          margin={20}
          height={"100%"}
          nav
          navText={[
            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>",
          ]}
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 3,
            },
          }}
        >
          {data.map((ele, index) => (
            <div key={index}>
              <ProductCard style={{ margin: "35px 0" }} ele={ele} />
            </div>
          ))}
        </OwlCarousel>
      )}
    </div>
  );
}

export default HorizontalSlider;
