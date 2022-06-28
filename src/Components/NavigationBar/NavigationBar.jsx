import React, { useState, useEffect, useRef, useCallback } from "react";
import "./NavigationBar.css";
import logo from "../../Assets/logomain.png";

import { useLocation, Link, useHistory } from "react-router-dom";
import SideMenu from "./Components/SideMenu";
import card from "../../Assets/card.png";
import { useTranslation } from "react-i18next";
import CategoryList from "../CategoriesList";
import { theme } from "../../styles/constant";
import { useDispatch, useSelector } from "react-redux";
import SearchFormPopup from "./Components/SearchFormPopup";
import CategoriesSection from "../../Views/Unkown/Home/Components/CatgoriesSection";
import { auth_loggedin } from "../../Store/AuthReducer";
import { useScroll } from "./Components/UseScrollHook";

function NavigationBar({ onScroll }) {
  const location = useLocation();
  let history = useHistory();
  let [submenu, setSubMenu] = useState(true);
  const { t, i18n } = useTranslation();
  let pages = useRef([
    {
      icon: "fas fa-house-chimney",
      name: "Home",
      route: "/",
    },
    {
      icon: "fas fa-code-branch",
      name: "Categories",
      route: "/#cat",
      dropdown: () => (
        <div className="dropdown-content">
          <CategoryList
            style={{
              width: "100%",
              height: "100%",
              padding: "20px",
              backgroundColor: "white",
            }}
          />
        </div>
      ),
    },
    { icon: "fa-solid fa-phone", name: "Contact Us", route: "/contact-us" },
    {
      icon: "fas fa-language",
      name: "Language",
      route: "",
      dropdown: () => (
        <div className="dropdown-content-langue">
          <ul>
            <li>العربية {}</li>
            <li>English</li>
          </ul>
        </div>
      ),
    },
  ]);
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const [list, setList] = useState([
    {
      name: "steam card (UAS)",
      ImagePath: card,
      price: 400,
    },

    {
      name: "steam card (UAS)",
      ImagePath: card,
      price: 1221,
    },
  ]);
  /*
      {
      name: "steam card (UAS)",
      ImagePath: card,
      price: 400,
    },

    {
      name: "steam card (UAS)",
      ImagePath: card,
      price: 1221,
    },*/
  const [values, setValues] = useState({});
  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);
  const openMenu = () => {
    setSubMenu(false);
    document.getElementById("touch").classList.remove("collapsed");
    document.getElementById("mySidenav").style.width = "80%";
  };
  const closeMenu = () => {
    setSubMenu(true);
    document.getElementById("touch")?.classList.add("collapsed");
    document.getElementById("mySidenav").style.width = "0";
  };
  const navigation = useCallback((e) => {
    closeMenu();
    history.push(e);
  }, []);
  const setDimension = useCallback(() => {
    if (window.innerWidth > 998) {
      closeMenu();
      document.getElementsByClassName(
        "search-input-mobile-view"
      )[0].style.display = "none";
    }
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  }, [window]);

  const getRoutes = useCallback(() => {
    return pages.current.filter((ele) => location.pathname === ele.route)[0];
  }, [location.pathname]);
  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  const ButtonToggler = () => {
    return (
      <i
        onClick={() => (submenu ? openMenu() : closeMenu())}
        className={"padding-icons-class  text-color-hover material-icons"}
        type="button"
        id="touch"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{
          backgroundColor: "transparent",
          cursor: "pointer ",
        }}
      >
        &#xE5D2;
      </i>
    );
  };

  useEffect(() => {
    if (i18n.language === "en") {
      document.getElementById("mySidenav").classList.add("direction-left");
      document.getElementById("mySidenav").classList.remove("direction-right");
    } else {
      document.getElementById("mySidenav").classList.remove("direction-left");
      document.getElementById("mySidenav").classList.add("direction-right");
    }
  }, [i18n.language]);
  const [login, setlogin] = useState();
  let selector_user = useSelector(auth_loggedin);
  useEffect(() => setlogin(selector_user), [selector_user]);

  const { y, x, scrollDirection } = useScroll();

  const styles = {
    active: {
      visibility: "visible",
      transition: "all 0.5s",
      position: "fixed",
      zIndex: "10",
      backgroundColor: "rgb(102 33 33)",
      direction: i18n.language === "en" ? "ltr" : "rtl",
      width: "100%",
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)",
    },
    def: {
      direction: i18n.language === "en" ? "ltr" : "rtl",
      backgroundColor: "rgb(102 33 33)",
      transition: "all 0.5s",
    },
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        // style={{
        //   direction: i18n.language === "en" ? "ltr" : "rtl",
        //   backgroundColor: "rgb(102 33 33)",
        // }}
        style={
          scrollPosition > 140
            ? scrollDirection === "down"
              ? styles.active
              : styles.hidden
            : styles.def
        }
      >
        <div id="mynav" style={{}}>
          <div className="row nav-up-container" id={"nav-up-container-id"}>
            <div className="col-4" style={{ alignSelf: "center" }}>
              <div className="search-input-mobile-view">
                <div
                  className=" text-color-hover close-search-input "
                  onClick={() =>
                    (document.getElementsByClassName(
                      "search-input-mobile-view"
                    )[0].style.display = "none")
                  }
                >
                  &times;
                </div>
                <div
                  className="search-input"
                  style={{ backgroundColor: "white", margin: "auto" }}
                  onSubmit={() =>
                    history.push("/list?q=" + values.searchinput + "&c=x")
                  }
                >
                  <input
                    className="search-input-element"
                    placeholder="Search here..."
                    required
                    name="searchinput"
                    onChange={handleChange}
                    value={values.searchinput}
                  ></input>
                  <div
                    onClick={() =>
                      history.push("/list?q=" + values.searchinput + "&c=0")
                    }
                    style={{
                      margin: "auto 15px",
                      cursor: "pointer",
                      backgroundColor: "transparent",
                    }}
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
                <SearchFormPopup list={list} />
              </div>
              <div className="main-section-navigation ">
                <div
                  className="Logo-size "
                  style={{ cursor: "pointer", color: "white" }}
                >
                  <div className="hide-web">
                    <input
                      style={{ display: "none" }}
                      id="check02"
                      type="checkbox"
                      name="menu"
                    />
                    <ButtonToggler />
                    <i
                      style={{ margin: " auto 0" }}
                      className="fa-solid fa-magnifying-glass padding-icons-class  text-color-hover"
                      onClick={() =>
                        (document.getElementsByClassName(
                          "search-input-mobile-view"
                        )[0].style.display = "block")
                      }
                    ></i>
                  </div>

                  <div className="hide-mobile">
                    <img
                      onClick={() => history.push("/")}
                      // src={logo}
                      src="https://craft-store.ly/wp-content/uploads/2021/12/white-logo-1.png"
                      className="logo-image"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-4"
              style={{ alignItems: "center", alignSelf: "center" }}
            >
              <div
                className="hide-web hide-img" // hide-img: hide site logo on mobile < 400px
                style={{ justifyContent: "center" }}
              >
                <img
                  alt="logo"
                  onClick={() => history.push("/")}
                  src="https://craft-store.ly/wp-content/uploads/2021/12/white-logo-1.png"
                  className="logo-image"
                />
              </div>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  history.push(
                    "/list?q=" + values.searchinput + "&c=Cateories"
                  );
                }}
                className="search-input hide-mobile"
              >
                <input
                  className="search-input-element"
                  placeholder={t("Search here...")}
                  name="searchinput"
                  onChange={handleChange}
                  value={values.searchinput}
                ></input>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "transparent",
                    margin: "auto 15px",
                    cursor: "pointer",
                    border: 0,
                  }}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
            <div
              className="col-4"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignSelf: "center",
                color: "white",
              }}
            >
              <b className="hide-mobile">
                {login ? (
                  <a className="notification">
                    <i
                      onClick={() => history.push("/dashboard")}
                      className=" padding-icons-class  text-color-hover fas fa-circle-user"
                    ></i>
                    {/* <span className="badge" style={{ backgroundColor: "red" }}>
                      3
                </span>*/}
                  </a>
                ) : (
                  <div
                    onClick={() => history.push("/log-in")}
                    className="text-remove-style  text-color-hover"
                    style={{ padding: "0 5px" }}
                  >
                    {t("Log In")}
                  </div>
                )}
                |
              </b>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignSelf: "center",
                }}
              >
                <a className="notification">
                  <i
                    onClick={() => history.push("/cart")}
                    className=" padding-icons-class  text-color-hover fa-solid fa-cart-arrow-down"
                  ></i>
                  <span className="badge" style={{ backgroundColor: "red" }}>
                    3
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div style={{ display: "block" }}>
            <SideMenu
              pages={pages}
              navigation={navigation}
              submenu={submenu}
              openMenu={openMenu}
              closeMenu={closeMenu}
            />
          </div>
        </div>
      </nav>
      <div className="max-width" style={{ height: "70px" }}>
        <ul
          style={{
            float: i18n.language === "en" ? "left" : "right",
            width: "100%",
            fontFamily: "'Almarai'",
          }}
          className="Horizontal-list  remove-dot container"
        >
          {pages.current.map((ele, index) => (
            <li
              key={index}
              className={
                getRoutes()?.route === ele?.route
                  ? "active-page allnav"
                  : " allnav"
              }
            >
              <Link
                className="Horizontal-list-elements text-color-hover"
                to={ele.route}
              >
                <i style={{ padding: "0 7px" }} className={ele.icon}></i>
                {t(ele.name)}
              </Link>

              {ele?.dropdown ? <ele.dropdown /> : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavigationBar;
