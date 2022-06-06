import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import Sliders from "../../../../Components/Slider/Sliders";

function SideBar() {
  const { t, i18n } = useTranslation();
  let history = useHistory();
  const data1 = [
    {
      name: "Windbreaker",
    },
    {
      name: "Jumpsuit",
    },
    {
      name: "Jumpsuit",
    },
    {
      name: "Windbreaker",
    },
    {
      name: "Coat",
    },
  ];
  const data2 = [
    {
      name: "Summer",
    },
    {
      name: "Autumn",
    },
    {
      name: "Jumpsuit",
    },
    {
      name: "Windbreaker",
    },
    {
      name: "Coat",
    },
  ];
  return (
    <div
      id="sidemenux"
      className={"product-dilter-side-menu col-lg-2 col-md-12 col-sm-12 "}
    >
      <div className="box border-bottom">
        <div className="box-label text-uppercase d-flex align-items-center">
          Sort By
          <button
            className="btn ml-auto"
            type="button"
            data-bs-toggle="collapse"
            href="#sort-by"
            aria-expanded="false"
            aria-controls="sort-by"
          >
            <span className="fas fa-plus"></span>
          </button>
        </div>
        <div id="sort-by" className="collapse mt-2 mr-1">
          {data1.map((ele) => (
            <div className="my-1">
              {" "}
              <label className="tick">
                {ele.name} <input type="checkbox" checked="checked" />{" "}
                <span className="check"></span>{" "}
              </label>{" "}
            </div>
          ))}
        </div>
      </div>
      <div className="box border-bottom">
        <div className="box-label text-uppercase d-flex align-items-center">
          Outerwear
          <button
            className="btn ml-auto"
            type="button"
            data-bs-toggle="collapse"
            href="#inner-box"
            aria-expanded="false"
            aria-controls="inner-box"
          >
            <span className="fas fa-plus"></span>
          </button>
        </div>
        <div id="inner-box" className="collapse mt-2 mr-1">
          {data1.map((ele) => (
            <div className="my-1">
              <label className="tick">
                {ele.name} <input type="checkbox" checked="checked" />
                <span className="check"></span>
              </label>{" "}
            </div>
          ))}
        </div>
      </div>
      <div className="box border-bottom">
        <div className="box-label text-uppercase d-flex align-items-center">
          season{" "}
          <button
            className="btn ml-auto"
            type="button"
            data-bs-toggle="collapse"
            href="#inner-box2"
            aria-expanded="false"
            aria-controls="inner-box2"
          >
            <span className="fas fa-plus"></span>
          </button>
        </div>
        <div id="inner-box2" className="collapse mt-2 mr-1">
          {data2.map((ele) => (
            <div className="my-1">
              {" "}
              <label className="tick">
                {ele.name} <input type="checkbox" checked="checked" />{" "}
                <span className="check"></span>{" "}
              </label>{" "}
            </div>
          ))}
        </div>
      </div>
      <div className="box border-bottom">
        <div className="box-label text-uppercase d-flex align-items-center">
          price
          <button
            className="btn ml-auto"
            type="button"
            data-bs-toggle="collapse"
            href="#price"
            aria-expanded="false"
            aria-controls="price"
          >
            <span className="fas fa-plus"></span>
          </button>
        </div>
        <div className="collapse" id="price">
          <Sliders />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
