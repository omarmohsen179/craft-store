import React from "react";
import { useTranslation } from "react-i18next";
import OwlCarousel from "react-owl-carousel";
import ProductCard from "../../../../Components/ProductCard";
import TitleHeader from "../../../../Components/TitleHeader";

function Post() {
  const { t, i18n } = useTranslation();
  return (
    <div
      className="w3-row w3-padding-64 max-width"
      id="about"
      style={{ textAlign: "center" }}
    >
      <TitleHeader
        title="about us"
        details={"Tradition since "}
        shaded={"1889"}
      />
      <div className="w3-col  w3-padding-large">
        <br />
        <h5 className="w3-center"></h5>
        <p className="w3-large">
          The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor
          sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only
          use <span className="w3-tag w3-light-grey">seasonal</span>{" "}
          ingredients.
        </p>
        <p className="w3-large w3-text-grey w3-hide-medium">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum consectetur adipiscing
          elit, sed do eiusmod temporincididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}

export default Post;
