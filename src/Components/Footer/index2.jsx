import React, { useCallback, useRef, useState } from "react";
import "./Footer2.css";
import "./Footer.css";
import back from "../../Assets/Homebackground.webp";
import { text } from "../../styles/constant";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Footer2() {
  const { t, i18n } = useTranslation();
  let pages = useRef([
    {
      icon: "fas fa-house-chimney",
      name: "Home",
      route: "/",
    },

    {
      icon: "fas fa-newspaper",
      name: "Blogs ",
      route: "/blogs",
    },

    { icon: "fas fa-address-card", name: "About", route: "/gallery" },
  ]);
  let social = useRef([
    { type: "facebook" },
    { type: "twitter" },
    { type: "linkedin-in" },
    { type: "instagram" },
  ]);

  const [values, setvalues] = useState({});
  const handleChange = useCallback(
    (e) => setvalues((prev) => ({ ...prev, [e.target.name]: e.target.value })),
    []
  );
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/Banners-Home/_-_-1.png" +
          ")",
        zIndex: "1",
        color: text,
      }}
      className="footer-container worksBlock"
    >
      <div style={{ textAlign: "center", color: "white" }}>
        <h1 style={{ textAlign: "center", color: "white", marginTop: "4%" }}>
          BE THE FIRST TO KNOW
        </h1>
        <p>Subscribe to our newsletter and get 10% off your first purchase</p>
      </div>
      <div className="email-sub-form-container">
        <form
          className="search-input"
          style={{ backgroundColor: "white", margin: "5px" }}
        >
          <input
            className="search-input-element"
            placeholder="EMAIL ADDRESS"
            required
            name="searchinput"
            onChange={handleChange}
            value={values.searchinput}
          ></input>
        </form>

        <button className="sub-button">Subscribe </button>
      </div>
      <footer className="footer">
        <div className="container bottom_border">
          <div className="row">
            <div className=" col-sm-4 col-md col-sm-4  col-12 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>

              <p className="mb10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p>
                <i className="fa fa-location-arrow"></i> 9878/25 sec 9 rohini 35{" "}
              </p>
              <p>
                <i className="fa fa-phone"></i> +91-9999878398{" "}
              </p>
              <p>
                <i className="fa fa fa-envelope"></i> info@example.com{" "}
              </p>
            </div>

            <div className=" col-sm-4 col-md  col-6 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>

              <ul className="footer_ul_amrc">
                <li>
                  <a href="http://webenlance.com">Image Rectoucing</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Clipping Path</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Hollow Man Montage</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Ebay & Amazon</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Hair Masking/Clipping</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Image Cropping</a>
                </li>
              </ul>
            </div>

            <div className=" col-sm-4 col-md  col-6 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>

              <ul className="footer_ul_amrc">
                <li>
                  <a href="http://webenlance.com">Remove Background</a>
                </li>
                <li>
                  <a href="http://webenlance.com">
                    Shadows & Mirror Reflection
                  </a>
                </li>
                <li>
                  <a href="http://webenlance.com">Logo Design</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Vectorization</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Hair Masking/Clipping</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Image Cropping</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <ul className="foote_bottom_ul_amrc">
            {pages.current.map((ele, index) => (
              <li key={index}>
                <Link to={ele.route}>{t(ele.name)}</Link>
              </li>
            ))}
          </ul>
          <p className="text-center">Copyright @2017 </p>

          <ul className="social_footer_ul">
            <li>
              <a href="http://webenlance.com">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="http://webenlance.com">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="http://webenlance.com">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="http://webenlance.com">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer2;
