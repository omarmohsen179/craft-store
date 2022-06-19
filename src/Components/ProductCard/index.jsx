import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Image from "../Image";
import "./index.css";
function ProductCard({ ele, style = {}, whish = false }) {
  let history = useHistory();

  const [clicked, setClicked] = useState(true);
  function removeFromWhishList() {
    setClicked(!clicked);
  }

  return (
    ele && (
      <div style={style} className="post-card card">
        <div
          style={{
            height: "300px",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
          onClick={() => history.push("/item?I=1")}
        >
          <Image src={ele.pic} />
        </div>
        <div className="post-card-option">
          <div className="product-icons">
            <i
              style={{ color: whish && clicked && "red" }}
              onClick={removeFromWhishList}
              className=" fas fa-heart"
            ></i>
          </div>
          {/* <div className="product-icons">
          <i className="fa-solid fa-arrows-rotate"></i>
        </div> */}
          <div className="product-icons">
            <i className="fa-solid fa-cart-arrow-down"></i>
          </div>
        </div>
        <div className="product-details">
          <p
            onClick={() => history.push("/item?I=1")}
            className="product-title text-color-hover"
          >
            {ele.e_name}
          </p>

          <div>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>

          <p className="price text-color-hover">${ele.price}</p>
        </div>
      </div>
    )
  );
}

export default ProductCard;
