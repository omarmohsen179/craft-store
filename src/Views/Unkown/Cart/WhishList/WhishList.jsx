import React, { useState } from "react";
import ProductCard from "../../../../Components/ProductCard";
import "./WhishList.scss";

function WhishList() {
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

  // const [clicked, setClicked] = useState(true);
  // function removeFromWhishList() {
  //   setClicked(!clicked);
  // }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Whish List</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((ele) => (
          <div
            className="col-lg-3 col-md-6 col-sm-12 pt-md-4 pt-3"
            style={{ minWidth: "300px" }}
          >
            <ProductCard
              ele={ele}
              whish={true}
              // clicked={clicked}
              // removeFromWhishList={removeFromWhishList}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default WhishList;
