import React, { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import "./index.css";
import useQuery from "../../../Components/useQuery";

import SideBar from "./Components/SideBar";
import ProductCard from "../../../Components/ProductCard";
import TitleHeader from "../../../Components/TitleHeader";
import { useState } from "react";
import PaginatedItems from "../../../Components/Pagination";
function ProductList() {
  const { t, i18n } = useTranslation();
  let history = useHistory();
  let query = useQuery();
  const [queryString, setqueryString] = useState({});
  const [sidestate, setsidestate] = useState(false);
  const [currentItems, setCurrentItems] = useState(null);
  useEffect(() => {
    const querydata = {
      search: query.get("q"),
      category: query.get("c") ? query.get("c") : "",
    };
    togglefilter();
    setqueryString(querydata);
  }, [query]);
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    if (sidestate) togglefilter();
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);
  const data = [
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/catalog/product/cache/7948183ab8341f894cfbbb22f78ef56d/n/i/nintendo_eshop_card_us_.jpg",
      title: "Apple (iTunes ) USA",
      price: 1234,
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/catalog/product/cache/7948183ab8341f894cfbbb22f78ef56d/m/i/microsoftteams-image_10_1_.png",
      title: "Apple (iTunes ) USA",
      price: 1234,
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/catalog/product/cache/7948183ab8341f894cfbbb22f78ef56d/f/i/file_4.png",
      title: "Apple (iTunes ) USA",
      price: 1234,
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/catalog/product/cache/7948183ab8341f894cfbbb22f78ef56d/m/i/microsoftteams-image_10_1_.png",
      title: "Apple (iTunes ) USA",
      price: 1234,
    },

    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/catalog/product/cache/7948183ab8341f894cfbbb22f78ef56d/f/i/file_4.png",
      title: "Apple (iTunes ) USA",
      price: 1234,
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/catalog/product/cache/7948183ab8341f894cfbbb22f78ef56d/f/i/file_4.png",
      title: "Apple (iTunes ) USA",
      price: 1234,
    },
  ];
  const togglefilter = useCallback(() => {
    document.getElementById("products-list").style.width =
      windowDimenion.winWidth > 1200 && !sidestate ? "75%" : "100%";
    document.getElementById("sidemenux").style.width = !sidestate
      ? windowDimenion.winWidth > 1200
        ? "25%"
        : "80%"
      : "0";
    document.getElementById("sidemenux").style.height = !sidestate
      ? "100%"
      : "0";
    setsidestate(!sidestate);
  }, [sidestate, windowDimenion.winWidth]);
  return (
    <div
      className="max-width product-list"
      style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}
    >
      <TitleHeader
        title={queryString["category"]}
        details={queryString["search"]}
        shaded={"resualt of "}
      />

      <div className=" align-items-center justify-content-between" id="header">
        <div
          className="text-color-hover"
          style={{ color: "black" }}
          onClick={togglefilter}
        >
          <span className="fas fa-filter" id="filter-angle"></span>
          <span style={{ padding: 2, fontWeight: "600" }} id="filter-angle">
            Filter
          </span>
        </div>
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <SideBar />

          <div
            id="products-list"
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              margin: "0",
            }}
          >
            {data.map((ele) => (
              <div
                className="col-lg-3 col-md-6 col-sm-12 pt-md-4 pt-3"
                style={{ minWidth: "300px" }}
              >
                <ProductCard ele={ele} />
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            minWidth: "100%",
            justifyContent: "center",
            margin: 0,
            marginTop: "50px",
          }}
        >
          <PaginatedItems
            itemsPerPage={4}
            data={[]}
            setCurrentItems={setCurrentItems}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductList;
