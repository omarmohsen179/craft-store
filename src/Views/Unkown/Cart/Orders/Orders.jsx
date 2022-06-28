import React, { useState } from "react";
import "./Order.css";

function Orders() {
  const [data, setData] = useState([
    {
      image_path:
        "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp",
      price: "399",
      item_name: "iPad",
      color: "Rose gold",
      status: "out for delivery",
    },
    {
      image_path:
        "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp",
      price: "399",
      item_name: "iPad",
      color: "Rose gold",
      status: "delivered",
    },
  ]);

  return (
    <section class="h-100 gradient-custom">
      <h2 style={{ textAlign: "center", marginTop: 20 }}>Orders Details</h2>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-10 col-xl-8">
            <div>
              <div class="d-flex justify-content-between align-items-center mb-4"></div>

              {data &&
                data.map((el) => (
                  <div class="card shadow-0 border mb-4">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-2">
                          <img
                            style={{ cursor: "pointer" }}
                            src={el.image_path}
                            class="img-fluid"
                            alt="Phone"
                          />
                        </div>
                        <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                          <p class="text-muted mb-0">{el.item_name}</p>
                        </div>
                        <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                          <p class="text-muted mb-0 small">{el.color}</p>
                        </div>
                        <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                          <p class="text-muted mb-0 small">Capacity: 32GB</p>
                        </div>
                        <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                          <p class="text-muted mb-0 small">Qty: 1</p>
                        </div>
                        <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                          <p class="text-muted mb-0 small">${el.price}</p>
                        </div>
                      </div>
                      <hr
                        class="mb-4"
                        style={{ backgroundColor: "#e0e0e0", opacity: "1" }}
                      />
                      <div class="row d-flex align-items-center">
                        <div class="col-md-2">
                          <p class="text-muted mb-0 small">Track Order</p>
                        </div>
                        <div class="col-md-10">
                          <div
                            class="progress"
                            style={{ height: "6px", borderRadius: "16px" }}
                          >
                            <div
                              class="progress-bar"
                              role="progressbar"
                              style={{
                                width:
                                  el.status === "delivered" ? "100%" : "30%",
                                borderRadius: "16px",
                                backgroundColor: "rgb(102 33 33)",
                              }}
                              aria-valuenow="20"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div class="d-flex justify-content-around mb-1">
                            <p class="text-muted mt-1 mb-0 small ms-xl-5">
                              Out for delivery
                            </p>
                            <p class="text-muted mt-1 mb-0 small ms-xl-5">
                              Delivered
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Orders;
