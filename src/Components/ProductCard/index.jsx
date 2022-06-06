import React from "react";
import { useHistory } from "react-router-dom";
import Image from "../Image";
import "./index.css";
function ProductCard({ ele, style = {} }) {
  let history = useHistory();
  return (
    <div
      onClick={() => history.push("/item?I=1")}
      style={style}
      className="post-card card"
    >
      <div
        style={{
          height: "300px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Image src={ele.image} />
      </div>
      <div className="post-card-option">
        <div className="product-icons">
          <i className=" fa-solid fa-solid fa-heart"></i>
        </div>
        <div className="product-icons">
          <i className="fa-solid fa-arrows-rotate"></i>
        </div>
        <div className="product-icons">
          <i className="fa-solid fa-cart-arrow-down"></i>
        </div>
      </div>
      <div className="product-details">
        <p className="product-title text-color-hover">{ele.title}</p>

        <div>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>

        <p className="price text-color-hover"> {ele.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
