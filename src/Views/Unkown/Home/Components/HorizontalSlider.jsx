import React from "react";
import { useTranslation } from "react-i18next";
import OwlCarousel from "react-owl-carousel";
import ProductCard from "../../../../Components/ProductCard";
import TitleHeader from "../../../../Components/TitleHeader";

function HorizontalSlider() {
  const data = [
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/catalog/product/cache/7948183ab8341f894cfbbb22f78ef56d/n/i/nintendo_eshop_card_us_.jpg",
      title: "Apple (iTunes ) USA",
      price: 1234,
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/catalog/product/cache/7948183ab8341f894cfbbb22f78ef56d/m/i/microsoftteams-image_10_1_.png",
      title: "Apple (iTunes ) USA",
      price: 1234,
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/catalog/product/cache/7948183ab8341f894cfbbb22f78ef56d/f/i/file_4.png",
      title: "Apple (iTunes ) USA",
      price: 1234,
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/catalog/product/cache/7948183ab8341f894cfbbb22f78ef56d/m/i/microsoftteams-image_10_1_.png",
      title: "Apple (iTunes ) USA",
      price: 1234,
    },

    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/catalog/product/cache/7948183ab8341f894cfbbb22f78ef56d/f/i/file_4.png",
      title: "Apple (iTunes ) USA",
      price: 1234,
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/catalog/product/cache/7948183ab8341f894cfbbb22f78ef56d/f/i/file_4.png",
      title: "Apple (iTunes ) USA",
      price: 1234,
    },
  ];
  const { t, i18n } = useTranslation();
  return (
    <div className="hor-slide">
      <div>
        <TitleHeader title={t("New")} details={"Item"} shaded={"Trendy"} />
      </div>

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
    </div>
  );
}

export default HorizontalSlider;
