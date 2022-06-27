import React, { useEffect, useState } from "react";

import Sliders from "../../../../Components/Slider/Sliders";
import { GET_CATEGORIES } from "../../../User/Categories/api";

function SideBar() {
  const [data1, setData1] = useState([]);

  useEffect(() => {
    GET_CATEGORIES().then((res) => setData1(res));
  }, []);

  const [priceRange, setPriceRange] = useState([5000, 15000]);
  console.log(priceRange);

  // const [checked, setChecked] = useState(false);
  function handleChange(e) {
    setPriceRange(e);

    //////// API post price Range ////////
  }
  const [array, setArray] = useState([]);

  useEffect(() => {
    //////  API send request ///////
  }, [array]);

  return (
    <div
      id="sidemenux"
      className={"product-dilter-side-menu col-lg-2 col-md-12 col-sm-12"}
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
          {data1 &&
            data1.map((el) => (
              <div className="my-1">
                <label className="tick">
                  {el.name_en}
                  <input
                    type="checkbox"
                    onClick={() => {
                      if (array.includes(el.Id)) {
                        array.splice(array.indexOf(el.Id), 1);
                      } else {
                        setArray((prev) => [...prev, el.Id]);
                      }
                    }}
                  />
                  <span className="check"></span>
                </label>
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
          <Sliders
            setPriceRange={setPriceRange}
            priceRange={priceRange}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
