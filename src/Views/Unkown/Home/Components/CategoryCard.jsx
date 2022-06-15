import React from "react";

function CategoryCard({ data, style }) {
  return data.map((el) => (
    <div style={style} id="card">
      <img src={el.image} alt="pic"></img>
      <label>{el.title}</label>
    </div>
  ));
}

export default CategoryCard;
