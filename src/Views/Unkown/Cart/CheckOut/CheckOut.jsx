import React from "react";
import ButtonComponent from "../../../../Components/ButtonComponent";
import "./CheckOut.scss";

function CheckOut() {
  return (
    <div className="check-out-cont">
      <section class="shop checkout section">
        <div class="container">
          <div class="row">
            <div
              //   style={{ border: "1px solid #d1d1d1" }}
              style={{
                background: " #fff",
                margin: "0 0 30px",
                border: " solid 1px #e6e6e6",
                padding: "30px",
                // -webkit-box-shadow: "0 1px 5px rgba(0, 0, 0, 0.1)",
                boxShadow: "0 1px 5px rgba(0, 0, 0, 0.1)",
              }}
              class="col-lg-8 col-12"
            >
              <div class="checkout-form">
                <h2>Make Your Checkout Here</h2>
                <p>Please register in order to checkout more quickly</p>

                <form class="form" method="post" action="#">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="form-group">
                        <label>
                          First Name<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder=""
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="form-group">
                        <label>
                          Last Name<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder=""
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="form-group">
                        <label>
                          Email Address<span>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder=""
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="form-group">
                        <label>
                          Phone Number<span>*</span>
                        </label>
                        <input
                          //   type="number"
                          name="number"
                          placeholder=""
                          required="required"
                        />
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="form-group">
                        <label>
                          Address Line 1<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="address"
                          placeholder=""
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="form-group">
                        <label>
                          Address Line 2<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="address"
                          placeholder=""
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="form-group">
                        <label>
                          Postal Code<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="post"
                          placeholder=""
                          required="required"
                        />
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-group create-account">
                        <input id="cbox" type="checkbox" />
                        <label>Create an account?</label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-4 col-12">
              <div
                // style={{ border: "1px solid #d1d1d1" }}
                style={{
                  background: " #fff",
                  margin: "0 0 30px",
                  border: " solid 1px #e6e6e6",
                  padding: "30px",
                  // -webkit-box-shadow: "0 1px 5px rgba(0, 0, 0, 0.1)",
                  boxShadow: "0 1px 5px rgba(0, 0, 0, 0.1)",
                }}
                class="order-details"
              >
                <div class="single-widget">
                  <h2>CART TOTALS</h2>
                  <div class="content">
                    <ul>
                      <li>
                        Sub Total<span>$330.00</span>
                      </li>
                      <li>
                        (+) Shipping<span>$10.00</span>
                      </li>
                      <li class="last">
                        Total<span>$340.00</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="single-widget">
                  <h2>Payments</h2>
                  <div class="content">
                    <div class="checkbox">
                      <label class="checkbox-inline" for="1">
                        <input name="updates" id="1" type="checkbox" /> Visa
                      </label>
                      <label class="checkbox-inline" for="2">
                        <input name="news" id="2" type="checkbox" /> Cash On
                        Delivery
                      </label>
                      <label class="checkbox-inline" for="3">
                        <input name="news" id="3" type="checkbox" /> PayPal
                      </label>
                    </div>
                  </div>
                </div>
                <div class="single-widget payement">
                  <div class="content">
                    <img
                      src="https://wpthemesgrid.com/themes/free/eshop/images/payment-method.png"
                      alt="#"
                      style={{ maxWidth: "100%" }}
                    />
                  </div>
                </div>

                <div class="single-widget get-button">
                  {/* <div style={{ backgroundColor: "#131f35" }} class="content">
                    <div class="button">
                      <a href="" class="btn">
                        proceed to checkout
                      </a>
                    </div>
                  </div> */}
                  <ButtonComponent title="Submit" type={"submit"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="shop-services section home">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-12">
              <div class="single-service">
                <i class="fas fa-truck"></i>
                <h4>Free shipping</h4>
                <p>Orders over $100</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="single-service">
                <i class="fas fa-repeat"></i>
                <h4>Free Return</h4>
                <p>Within 30 days returns</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="single-service">
                <i class="fas fa-lock"></i>
                <h4>Secure Payment</h4>
                <p>100% secure payment</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="single-service">
                <i class="fas fa-dollar-sign"></i>
                <h4>Best Price</h4>
                <p>Guaranteed price</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CheckOut;
