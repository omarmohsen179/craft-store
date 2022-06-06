import { useEffect } from "react";

import { useTranslation } from "react-i18next";
import ButtonComponent from "../../../Components/ButtonComponent";
import IncrementInput from "../../../Components/IncrementInput";
import "./index.css";
function Cart(props) {
  const { t, i18n } = useTranslation();
  useEffect(() => {}, []);
  const data = [
    {
      image: "https://designmodo.com/demo/shopping-cart/item-1.png",
      name: "Common Projects",
      Note: "US",
      Quantity: 2,
      price: 23,
    },
    {
      image: "https://designmodo.com/demo/shopping-cart/item-1.png",
      name: "Common Projects",
      Note: "UK",
      Quantity: 2,
      price: 23,
    },
    {
      image: "https://designmodo.com/demo/shopping-cart/item-1.png",
      name: "Common Projects",
      Note: "US",
      Quantity: 2,
      price: 23,
    },
    {
      image: "https://designmodo.com/demo/shopping-cart/item-1.png",
      name: "Common Projects",
      Note: "US",
      Quantity: 2,
      price: 23,
    },
  ];
  return (
    <div className=" max-width">
      <div className="row">
        <div className="col-lg-8 col-md-6 col-sm-12">
          <div
            className="shopping-cart"
            style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}
          >
            <div className="title">Shopping Bag</div>
            {data.map((ele) => (
              <div className="item row">
                <div className="col-1 buttons">
                  <span className="fas fa-xmark"></span>
                  <span className="fas fa-heart"></span>
                </div>

                <div className="col image">
                  <img src={ele.image} alt="" />
                </div>

                <div className="col description">
                  <span>{ele.name}</span>

                  <span>{ele.note}</span>
                </div>

                <div className="col quantity">
                  <IncrementInput value={ele.Quantity} name={"Quantity"} />
                </div>

                <div className="col total-price">{ele.price}$</div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div
            className="shopping-cart "
            style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}
          >
            <div className="item row">
              <div class="totals-item" style={{ padding: "16px" }}>
                <label>Total Price</label>
                <div class="totals-value" id="cart-subtotal">
                  71.97
                </div>
              </div>

              <div class="totals-item totals-item-total">
                <ButtonComponent title={"go to payment"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
