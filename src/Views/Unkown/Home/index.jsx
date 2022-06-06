import React from "react";
import CategoryList from "../../../Components/CategoriesList";
import AppHero from "./Components/hero";
import HorizontalSlider from "./Components/HorizontalSlider";
import Post from "./Components/post";
import "./index.css";
function Home() {
  return (
    <div>
      <AppHero />
      <Post />
      <HorizontalSlider />
      <CategoryList
        title="Categories"
        style={{ padding: "10%", margin: "111px 0" }}
      />
    </div>
  );
}

export default Home;
