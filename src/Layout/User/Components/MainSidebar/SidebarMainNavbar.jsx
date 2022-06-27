import React from "react";
import PropTypes from "prop-types";
import { Navbar, NavbarBrand } from "shards-react";

import { useDispatch } from "react-redux";
import {
  side_menu_status,
  ToggleSideMenu,
} from "../../../../Store/SidebarReducer";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
const SidebarMainNavbar = ({ image = true }) => {
  let dispatch = useDispatch();
  const [state, setstate] = useState();
  let selector = useSelector(side_menu_status);
  useEffect(() => {
    setstate(selector);
  }, [selector]);
  function handleClick(e) {
    dispatch(ToggleSideMenu());
  }
  const history = useHistory();
  return (
    <div style={{ borderBottom: "1px solid white" }} className="main-navbar">
      <Navbar
        className="align-items-stretch flex-md-nowrap border-bottom p-0"
        type="light"
      >
        <NavbarBrand href="#" style={{ lineHeight: "25px", margin: "auto" }}>
          <div></div>
          {image ? (
            <div className="d-table m-auto">
              <img
                id="main-logo"
                className="d-inline-block align-top mr-1"
                style={{ maxWidth: "150px" }}
                onClick={() => history.push("/home")}
                src={
                  "https://craft-store.ly/wp-content/uploads/2021/12/white-logo-1.png"
                }
                alt="Shards Dashboard"
              />
            </div>
          ) : null}
        </NavbarBrand>
        {/* eslint-disable-next-line */}
        <a
          style={{ backgroundColor: "white" }}
          className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
          onClick={handleClick}
        >
          {state ? (
            <i className="material-icons">&#xE5C4;</i>
          ) : (
            <i
              style={{
                backgroundColor: "white",
                width: "40px",
                fontSize: "18px",
                margin: "auto 0",
              }}
              className="fas fa-bars"
            ></i>
          )}
        </a>
      </Navbar>
    </div>
  );
};

SidebarMainNavbar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool,
};

SidebarMainNavbar.defaultProps = {
  hideLogoText: false,
};

export default SidebarMainNavbar;
