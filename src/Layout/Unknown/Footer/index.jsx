import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Footer2.css";
import "./Footer.css";
import { text } from "../../../styles/constant";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { auth_loggedin, user_selector } from "../../../Store/AuthReducer";
import { routes } from "../../User/routes";

function Footer() {
  const { t, i18n } = useTranslation();
  const [login, setlogin] = useState();
  let selector_user = useSelector(auth_loggedin);
  useEffect(() => setlogin(selector_user), [selector_user]);
  let pages = useRef([
    {
      icon: "fas fa-house-chimney",
      name: "Home",
      route: "/",
    },
    { icon: "fas fa-address-card", name: "Contact Us", route: "/contact-us" },
  ]);
  let [Routes, setRoutes] = useState([]);
  let selector = useSelector(user_selector);
  useEffect(() => {
    const routes_data = [
      routes[0],
      routes[1],
      ...routes.filter((ele) => selector?.roles?.includes(ele.key)),
    ];
    setRoutes(routes_data);
    //dispatch(SetSidebarData(routes_data));
  }, [selector]);
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
          "https://images.unsplash.com/photo-1496115898806-2b023a9dcb6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG5pa2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" +
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
              <h5 className="headin5_amrc col_white_amrc pt2">Contact Us </h5>
              <p>
                <i className="fas fa-location-dot"></i> Misrata , Libya – The
                third road
              </p>
              <p>
                <i className="fa fa-phone"></i> Line 1: (+218) 91 5787875
              </p>
              <p>
                <i className="fa fa fa-envelope"></i> info@craft-store.ly
              </p>
            </div>

            <div className=" col-sm-4 col-md  col-6 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Pages</h5>

              <ul className="footer_ul_amrc">
                {pages.current.map((ele, index) => (
                  <li key={index}>
                    <Link to={ele.route}>{t(ele.name)}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className=" col-sm-4 col-md  col-6 col">
              <h5 className="headin5_amrc col_white_amrc pt2">User Pages</h5>
              <ul className="footer_ul_amrc">
                {login ? (
                  Routes.map((ele, index) => (
                    <li key={index}>
                      <Link to={ele.path}>{t(ele.title)}</Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <Link to={"log-in"}> {t("Log In / Register")}</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <p className="text-center">
            © <span>Craft-store</span> – All Rights Reserved 2021
          </p>

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

export default Footer;
