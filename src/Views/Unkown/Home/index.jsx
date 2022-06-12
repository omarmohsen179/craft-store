import React from "react";
import CategoryList from "../../../Components/CategoriesList";
import CategoriesSection from "./Components/CatgoriesSection";
import AppHero from "./Components/hero";
import HorizontalSlider from "./Components/HorizontalSlider";
import MarqueeSlider from "./Components/MarqueeSlider";
import Post from "./Components/post";
import "./index.scss";
function Home() {
  return (
    <div className="home-cont">
      <AppHero />

      {/* <Post /> */}
      <MarqueeSlider />
      <HorizontalSlider />
      <CategoriesSection />
      {/* <CategoryList
        title="Categories"
        style={{ padding: "10%", margin: "111px 0" }}
      /> */}
    </div>
  );
}

export default Home;
