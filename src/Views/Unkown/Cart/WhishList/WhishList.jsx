import React, { useState } from "react";
import ProductCard from "../../../../Components/ProductCard";
import "./WhishList.scss";

function WhishList() {
  const data = [
    {
      image: "https://i.imgur.com/5Aqgz7o.jpg",
      title: "Apple (iTunes ) USA",
      price: 1234,
    },
    {
      image: "https://i.imgur.com/5Aqgz7o.jpg",
      title: "Apple (iTunes ) USA",
      price: 1234,
    },
  ];

  // const [clicked, setClicked] = useState(true);
  // function removeFromWhishList() {
  //   setClicked(!clicked);
  // }

  return (
    <div className="whish-list-cont">
      <div class="container d-flex justify-content-center mt-50 mb-50">
        <div style={{ display: "flex", justifyContent: "center" }} class="row">
          <h1 style={{ textAlign: "center", marginBottom: 30 }}>Whish List</h1>
          <div class="col-md-10">
            {data.map((el) => (
              <div class="card card-body mt-4">
                <div class="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
                  <div class="mr-2 mb-3 mb-lg-0">
                    <img
                      src="https://i.imgur.com/5Aqgz7o.jpg"
                      width="150"
                      height="150"
                      alt=""
                    />
                  </div>

                  <div class="media-body">
                    <h6 class="media-title font-weight-semibold">
                      <a href="#" data-abc="true">
                        Apple iPhone XR (Red, 128 GB)
                      </a>
                    </h6>

                    <ul class="list-inline list-inline-dotted mb-3 mb-lg-2">
                      <li class="list-inline-item">
                        <a href="#" class="text-muted" data-abc="true">
                          Phones
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#" class="text-muted" data-abc="true">
                          Mobiles
                        </a>
                      </li>
                    </ul>

                    <p class="mb-3">
                      128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera
                      | 7MP Front Camera A12 Bionic Chip Processor | Gorilla
                      Glass with high quality display{" "}
                    </p>
                  </div>

                  <div class="mt-3 mt-lg-0 ml-lg-3 text-center">
                    <h3 class="mb-0 font-weight-semibold">$459.99</h3>

                    <div>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>

                    <div class="text-muted">1985 reviews</div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <button
                        type="button"
                        class="btn btn-warning mt-4 text-white"
                        style={{
                          backgroundColor: "rgb(102 33 33)",
                          fontSize: "13px",
                        }}
                      >
                        Add to cart
                        <i
                          style={{ marginLeft: 10, fontSize: "15px" }}
                          class="fas fa-cart-plus"
                        ></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-warning mt-4 text-white"
                        style={{ backgroundColor: "red", fontSize: "13px" }}
                      >
                        Remove
                        <i
                          style={{ marginLeft: 10, fontSize: "15px" }}
                          class="fas fa-trash"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhishList;
