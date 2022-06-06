import React from "react";
import PropTypes from "prop-types";
import { Navbar, NavbarBrand } from "shards-react";

import { useDispatch } from "react-redux";
import { ToggleSideMenu } from "../../../../Store/SidebarReducer";
import { useHistory } from "react-router-dom";
const SidebarMainNavbar = () => {
  let dispatch = useDispatch();

  function handleClick(e) {
    dispatch(ToggleSideMenu());
  }
  const history = useHistory();
  return (
    <div className="main-navbar">
      <Navbar
        className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0"
        type="light"
      >
        <NavbarBrand
          className="w-100 mr-0"
          href="#"
          style={{ lineHeight: "25px" }}
        >
          <div className="d-table m-auto">
            <img
              id="main-logo"
              className="d-inline-block align-top mr-1"
              style={{ maxWidth: "150px" }}
              onClick={() => history.push("/home")}
              src={require("../../../../Assets/logomain.png")}
              alt="Shards Dashboard"
            />
          </div>
        </NavbarBrand>
        {/* eslint-disable-next-line */}
        <a
          className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
          onClick={handleClick}
        >
          <i className="material-icons">&#xE5C4;</i>
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
