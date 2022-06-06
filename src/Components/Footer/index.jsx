import React, { useCallback, useRef, useState } from "react";
import "./Footer.css";
import back from "../../Assets/footer.jpg";
import { useLocation, Link } from "react-router-dom";
function Footer() {
  let pages = useRef([
    { name: "Home", route: "/" },
    { name: "About us", route: "/about-us" },
    { name: "Listinings", route: "/listinings" },
    { name: "Our Team", route: "/our-team" },
    { name: "Gallery", route: "/gallery" },
    { name: "Contact Us", route: "/contact-us" },
  ]);
  let social = useRef([
    { type: "facebook" },
    { type: "twitter" },
    { type: "linkedin-in" },
    { type: "instagram" },
  ]);
  const colsdiv = "col-lg-3 col-md-3 col-sm-12";
  const [values, setvalues] = useState({});
  const handleChange = useCallback((e) => {
    setvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);
  return (
    <div
      style={{ backgroundImage: "url(" + back + ")" }}
      className="footer-container worksBlock"
    >
      <div style={{ textAlign: "center", color: "white" }}>
        <h1 style={{ textAlign: "center", color: "white" }}>
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
      <div style={{ backgroundColor: "white" }}>
        <div className="row main-footer max-width">
          <div className={"col-lg-4 col-md-4 col-sm-12"}>
            <h2 className="footer-section-title">Al medad soft</h2>
            <div className="footer-section-content">
              <div className="footer-section-content">
                PrimoTech is a Libyan online store that offers various products
                to suit all tastes, it's dealing directly with customers, it
                includes all stages of shopping from selection, ordering,
                purchase to the delivery of customer's orders.
              </div>
            </div>
          </div>

          <div className={colsdiv}>
            <div className="footer-section">
              <h2 className="footer-section-title">Web Context</h2>
              <ul className="remove-dot footer-section-content">
                {pages.current.map((ele) => (
                  <li>
                    <Link
                      className="Horizontal-list-elements element-hover"
                      to={ele.route}
                      style={{ lineHeight: "40px" }}
                    >
                      {ele.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={colsdiv}>
            <div className="footer-section">
              <h2 className="footer-section-title">Web Context</h2>
              <ul className="remove-dot footer-section-content">
                {pages.current.map((ele) => (
                  <li>
                    <Link
                      className="Horizontal-list-elements element-hover"
                      to={ele.route}
                      style={{ lineHeight: "40px" }}
                    >
                      {ele.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={"col-lg-2 col-md-2 col-sm-12"}>
            <h2
              className="footer-section-title"
              style={{ textAlign: "center" }}
            >
              Stay Connected
            </h2>
            <div className="footer-section-content">
              <div className="footerContactsContainer">
                {social.current.map((ele) => {
                  return (
                    <a target="_blank" className="footerContactsContainerIcon">
                      <i className={"fab fa-" + ele.type}></i>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
