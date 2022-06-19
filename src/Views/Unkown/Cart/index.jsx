import { useCallback, useEffect, useRef, useState } from "react";

import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import ButtonComponent from "../../../Components/ButtonComponent";
import IncrementInput from "../../../Components/IncrementInput";
import "./index.scss";
function Cart(props) {
  const { t, i18n } = useTranslation();
  useEffect(() => {}, []);
  const [data, setData] = useState([
    {
      id: 1,
      image: "https://designmodo.com/demo/shopping-cart/item-1.png",
      name: "Common Projects",
      Discount: 3,
      Quantity: 10,
      price: 23.59,
    },
    {
      id: 2,
      image: "https://designmodo.com/demo/shopping-cart/item-1.png",
      name: "Common Projects 1",
      Discount: 3,
      Quantity: 5,
      price: 29.99,
    },
    {
      id: 3,
      image: "https://designmodo.com/demo/shopping-cart/item-1.png",
      name: "Common Projects 2",
      Discount: 3,
      Quantity: 12,
      price: 23,
    },
  ]);

  const defaultValues = useRef({
    Quantity: 0,
  });

  const [values, setValues] = useState(defaultValues.current);

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleChangeArray = useCallback((id, value) => {
    setData((prev) =>
      prev.map((ele) =>
        ele.id === id ? { ...ele, Quantity: value } : { ...ele }
      )
    );
  }, []);
  ////////// total of cart //////////
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i].price - data[i].Discount;
  }

  let shipping = 10;
  let tax = 0;
  let count = 0;
  data?.map((el) => count++);

  let history = useHistory();

  return (
    <>
      <div className="shopping-cart-cont">
        <div id="top"></div>

        <div id="search" class="collapse">
          <div class="container">
            <form role="search" class="ml-auto">
              <div class="input-group">
                <input type="text" placeholder="Search" class="form-control" />
                <div class="input-group-append">
                  <button type="button" class="btn btn-primary">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div id="all">
          <div id="content">
            <div class="container">
              <div class="row">
                <div id="basket" class="col-lg-9">
                  <div class="box">
                    <form method="post" action="checkout1.html">
                      <h1>Shopping cart</h1>
                      <p class="text-muted">
                        You currently have {count} item(s) in your cart.
                      </p>
                      <div class="table-responsive">
                        <table class="table">
                          <thead>
                            <tr>
                              <th colspan="2">Product</th>
                              <th>Quantity</th>
                              <th>Unit price</th>
                              <th>Discount</th>
                              <th colspan="2">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data?.map((el) => (
                              <tr>
                                <td>
                                  <a href="#">
                                    <img
                                      style={{ width: "100%" }}
                                      src={el.image}
                                      alt={el.name}
                                    />
                                  </a>
                                </td>
                                <td>
                                  <a href="#">{el.name}</a>
                                </td>
                                <td>
                                  <IncrementInput
                                    value={el.Quantity}
                                    setValues={(e) =>
                                      handleChangeArray(el.id, e)
                                    }
                                    name={"Quantity"}
                                    handleChange={(e) =>
                                      handleChangeArray(el.id, e.target.value)
                                    }
                                  />
                                </td>
                                <td>${el.price}</td>
                                <td>${el.Discount}</td>
                                <td>${el.price - el.Discount}</td>
                                <td>
                                  <button
                                    style={{
                                      border: "none",
                                      backgroundColor: "transparent",
                                    }}
                                  >
                                    <i
                                      style={{ color: "red" }}
                                      class="fa fa-trash-o"
                                    ></i>
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                          <tfoot>
                            <tr>
                              <th colspan="5">Total</th>
                              <th colspan="2">${total}</th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                      <div class="box-footer d-flex justify-content-between flex-column flex-lg-row">
                        <div class="left">
                          <a
                            href="category.html"
                            class="btn btn-outline-secondary"
                          >
                            <i class="fa fa-chevron-left"></i> Continue shopping
                          </a>
                        </div>
                        <div class="right">
                          <button class="btn btn-outline-secondary">
                            <i class="fa fa-refresh"></i> Update cart
                          </button>
                          <button
                            onClick={() => history.push("/check-out")}
                            type="submit"
                            class="btn btn-primary"
                          >
                            Proceed to checkout{" "}
                            <i class="fa fa-chevron-right"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div id="order-summary" class="box">
                    <div class="box-header">
                      <h3 class="mb-0">Order summary</h3>
                    </div>
                    <p class="text-muted">
                      Shipping and additional costs are calculated based on the
                      values you have entered.
                    </p>
                    <div class="table-responsive">
                      <table class="table">
                        <tbody>
                          <tr>
                            <td>Order subtotal</td>
                            <th>${total}</th>
                          </tr>
                          <tr>
                            <td>Shipping and handling</td>
                            <th>${shipping}</th>
                          </tr>
                          <tr>
                            <td>Tax</td>
                            <th>$0.00</th>
                          </tr>
                          <tr class="total">
                            <td>Total</td>
                            <th>${total + shipping + tax}</th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="box">
                    <div class="box-header">
                      <h4 class="mb-0">Coupon code</h4>
                    </div>
                    <p class="text-muted">
                      If you have a coupon code, please enter it in the box
                      below.
                    </p>
                    <form>
                      <div class="input-group">
                        <input type="text" class="form-control" />
                        <span class="input-group-append">
                          <button type="button" class="btn btn-primary">
                            <i class="fa fa-gift"></i>
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
