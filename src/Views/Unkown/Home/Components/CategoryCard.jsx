import React from "react";

function CategoryCard({ data, style }) {
  return (
    data &&
    data.map((el) => (
      <div style={style} id="card">
        <img src={el.image_path} alt="pic"></img>
        <label>{el.name_en}</label>
      </div>
    ))
  );
}

export default CategoryCard;
