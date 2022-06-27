import React, { useEffect, useState } from "react";
import TitleHeader from "../../../../Components/TitleHeader";
import { getCategories, GET_CATEGORIES_HEAD } from "./Api";
import CategoryCard from "./CategoryCard";

function CategoriesSection({ image, style }) {
  const [data, setData] = useState();
  useEffect(() => {
    GET_CATEGORIES_HEAD().then((res) => setData(res));
  }, []);

  return (
    <div style={{ marginTop: 10 }}>
      <TitleHeader title="Categories" />
      <div className="categories-cont">
        <CategoryCard style={style} data={data} />
      </div>
    </div>
  );
}

export default CategoriesSection;
