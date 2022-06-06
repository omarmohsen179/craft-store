import React, { useState, useEffect, useRef, useCallback } from "react";
import "./NavigationBar.css";
import logo from "../../Assets/logomain.png";

import { useLocation, Link, useHistory } from "react-router-dom";
import SideMenu from "./Components/SideMenu";
import card from "../../Assets/card.png";
import { useTranslation } from "react-i18next";
import CategoryList from "../CategoriesList";
import { theme } from "../../styles/constant";
import SearchFormPopup from "./Components/SearchFormPopup";
function NavigationBar() {
  const location = useLocation();
  let history = useHistory();
  let [submenu, setsubmenu] = useState(true);
  let pages = useRef([
    {
      icon: "fas fa-house-chimney",
      name: "Home",
      route: "/",
    },

    {
      icon: "fas fa-newspaper",
      name: "Blogs",
      route: "/blogs",
    },
    {
      icon: "fas fa-code-branch",
      name: "Categories",
      route: "/#cat",
      dropdown: () => (
        <CategoryList
          style={{
            width: "100%",
            height: "100%",
            padding: "20px",
            backgroundColor: "white",
          }}
        />
      ),
    },
    { icon: "fa-solid fa-phone", name: "Contact-Us", route: "/contact-us" },
    // { icon: "fas fa-address-card", name: "About", route: "/gallery" },
  ]);
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const [list, setlist] = useState([
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
  const [values, setvalues] = useState({});
  const handleChange = useCallback((e) => {
    setvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);
  const openMenu = () => {
    setsubmenu(false);
    document.getElementById("touch").classList.remove("collapsed");
    document.getElementById("mySidenav").style.width = "80%";
  };
  const closeMenu = () => {
    setsubmenu(true);
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
    console.log(location.pathname);
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

  const { t, i18n } = useTranslation();
  useEffect(() => {
    if (i18n.language === "en") {
      document.getElementById("mySidenav").classList.add("direction-left");
      document.getElementById("mySidenav").classList.remove("direction-right");
      var xx = document.querySelectorAll(".collapsible");
    } else {
      document.getElementById("mySidenav").classList.remove("direction-left");
      document.getElementById("mySidenav").classList.add("direction-right");
    }
  }, [i18n.language]);

  return (
    <nav style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}>
      <div id="mynav">
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
                  onClick={() => {
                    history.push(
                      "/list?q=" + values.searchinput + "&c=Category"
                    );
                  }}
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
              <div className="Logo-size " style={{ cursor: "pointer" }}>
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

                <div className="hide-mobile ">
                  <img
                    onClick={() => history.push("/")}
                    src={logo}
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
            <div className="hide-web" style={{ justifyContent: "center" }}>
              <img
                alt="logo"
                onClick={() => history.push("/")}
                src={logo}
                className="logo-image"
              />
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                history.push("/list?q=" + values.searchinput + "&c=Cateories");
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
            }}
          >
            <b className="hide-mobile">
              <div
                onClick={() => history.push("/log-in")}
                className="text-remove-style  text-color-hover"
                style={{ padding: "0 5px" }}
              >
                {t("Log In")}
              </div>
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
                <span className="badge" style={{ backgroundColor: theme }}>
                  3
                </span>
              </a>
              <a className="notification">
                <i
                  onClick={() => history.push("/dashboard")}
                  className=" padding-icons-class  text-color-hover fas fa-circle-user"
                ></i>
                <span className="badge" style={{ backgroundColor: theme }}>
                  3
                </span>
              </a>
            </div>
          </div>
        </div>

        <div>
          <ul
            style={{
              float: i18n.language === "en" ? "left" : "right",
              width: "36%",
            }}
            className="Horizontal-list  remove-dot"
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
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

                  {ele?.dropdown ? (
                    <div className="dropdown-content">
                      <ele.dropdown />
                    </div>
                  ) : null}
                </li>
              ))}
            </div>
          </ul>
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
  );
}

export default NavigationBar;
