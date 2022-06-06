import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import ButtonComponent from "../../../Components/ButtonComponent";
import Image from "../../../Components/Image";
import IncrementInput from "../../../Components/IncrementInput";
import SelectInput from "../../../Components/SelectInput";
import TitleHeader from "../../../Components/TitleHeader";
import { theme } from "../../../styles/constant";

import "./index.css";
function Product() {
  const { t, i18n } = useTranslation();
  let history = useHistory();
  const [values, setvalues] = useState({ size: 1, Quantity: 1 });
  const handleChange = useCallback(
    ({ name, value }) => setvalues((prev) => ({ ...prev, [name]: value })),
    []
  );
  const [active_image, set_active_image] = useState(0);
  const images = [
    { images: "https://s.fotorama.io/1.jpg" },
    {
      images:
        "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg",
    },
    {
      images:
        "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg",
    },
    {
      images:
        "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg",
    },
    { images: "https://s.fotorama.io/1.jpg" },
    {
      images:
        "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg",
    },
    {
      images:
        "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg",
    },
    { images: "https://s.fotorama.io/1.jpg" },
    {
      images:
        "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg",
    },
    {
      images:
        "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg",
    },
    { images: "https://s.fotorama.io/1.jpg" },
    {
      images:
        "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg",
    },
    {
      images:
        "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg",
    },
    { images: "https://s.fotorama.io/1.jpg" },
  ];
  return (
    <div
      className="container"
      style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}
    >
      <TitleHeader title="Variable Product" />
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="zoom-thumb row">
            <div className="piclist col-lg-2  col-md-12  col-sm-12 images-list">
              {images.map((ele, index) => (
                <li
                  className={
                    active_image === index ? "active-image " : " image "
                  }
                  onClick={() => set_active_image(index)}
                >
                  <Image
                    className={"list-image-item"}
                    src={ele.images}
                    alt=""
                  />
                </li>
              ))}
            </div>

            <div className="display-selected-image col-lg-10  col-md-12  col-sm-12  ">
              <img
                className={"my_img "}
                src={
                  images.filter((e, index) => index === active_image)[0].images
                }
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="product-dtl">
            <div className="product-info">
              {/*<div className="product-name">Variable Product</div>*/}
              <div className="reviews-counter">
                <div className="rate">
                  <input
                    type="radio"
                    id="star5"
                    name="rate"
                    value="5"
                    checked
                  />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input
                    type="radio"
                    id="star4"
                    name="rate"
                    value="4"
                    checked
                  />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input
                    type="radio"
                    id="star3"
                    name="rate"
                    value="3"
                    checked
                  />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
                <span>3 Reviews</span>
              </div>
              <div className="product-price-discount">
                <span>$39.00</span>
                <span className="line-through">$29.00</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="row">
              <div className="col-md-6">
                <label for="size">Size</label>
                <SelectInput
                  data={[
                    { Id: 1, Name: "S" },
                    { Id: 2, Name: "M" },
                    { Id: 3, Name: "L" },
                    { Id: 4, Name: "XL" },
                  ]}
                  handleChang={handleChange}
                  name="size"
                  value={values.size}
                />
              </div>

              <div className="col-md-6">
                <label for="color">Color</label>
                <SelectInput
                  data={[
                    { Id: 1, Name: "Blue" },
                    { Id: 2, Name: "Red" },
                    { Id: 3, Name: "Yellow" },
                  ]}
                  handleChang={handleChange}
                  name="color"
                  value={values.color}
                />
              </div>
            </div>
            <label for="size">Quantity</label>
            <div className="product-count">
              <IncrementInput
                value={values.Quantity}
                setvalues={(e) => handleChange({ value: e, name: "Quantity" })}
                name={"Quantity"}
              />
              <div className="round-black-btn">
                <ButtonComponent title={"Add to Cart"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-info-tabs">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="description-tab"
              data-bs-toggle="tab"
              href="#description"
              role="tab"
              aria-controls="description"
              aria-selected="true"
            >
              Description
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="review-tab"
              data-bs-toggle="tab"
              href="#review"
              role="tab"
              aria-controls="review"
              aria-selected="false"
            >
              Reviews (0)
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="description"
            role="tabpanel"
            aria-labelledby="description-tab"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam.
          </div>
          <div
            className="tab-pane fade"
            id="review"
            role="tabpanel"
            aria-labelledby="review-tab"
          >
            <div className="review-heading">REVIEWS</div>
            <p className="mb-20">There are no reviews yet.</p>
            <form className="review-form">
              <div className="form-group">
                <label>Your rating</label>
                <div className="reviews-counter">
                  <div className="rate">
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text">
                      5 stars
                    </label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text">
                      4 stars
                    </label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text">
                      3 stars
                    </label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">
                      2 stars
                    </label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">
                      1 star
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Your message</label>
                <textarea className="form-control" rows="10"></textarea>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name=""
                      className="form-control"
                      placeholder="Name*"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name=""
                      className="form-control"
                      placeholder="Email Id*"
                    />
                  </div>
                </div>
              </div>

              <div className="round-black-btn">
                <ButtonComponent title={"Submit Review"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
