import React from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { ToggleSideMenu } from "../../../../Store/SidebarReducer";

function NavbarToggle(props) {
  let dispatch = useDispatch();

  function handleClick(e) {
    dispatch(ToggleSideMenu());
  }
  return (
    <nav className="nav">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        type="button"
        onClick={handleClick}
        className="nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-inline d-lg-none text-center"
      >
        <i className="material-icons">&#xE5D2;</i>
      </a>
    </nav>
  );
}

export default NavbarToggle;
