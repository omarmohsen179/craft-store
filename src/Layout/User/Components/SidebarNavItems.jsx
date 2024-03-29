import React from "react";
import { Nav } from "shards-react";
import { NavLink as RouteNavLink } from "react-router-dom";
import { NavItem, NavLink } from "shards-react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { userLogOut } from "../../../Store/AuthReducer";
import {
  CloseSideMenu,
  side_menu_data,
  ToggleSideMenu,
} from "../../../Store/SidebarReducer";
const SidebarNavItem = ({ item, OnClick = () => {} }) => (
  <div onClick={OnClick}>
    <NavItem>
      <NavLink tag={RouteNavLink} to={item.path}>
        {item.htmlBefore && (
          <div
            className="d-inline-block item-icon-wrapper"
            dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
          />
        )}
        {item.title && <span>{item.title}</span>}
        {item.htmlAfter && (
          <div
            className="d-inline-block item-icon-wrapper"
            dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
          />
        )}
      </NavLink>
    </NavItem>
  </div>
);

const SidebarNavItems = (props) => {
  let dispatch = useDispatch();
  const [navItems, setnavItems] = useState([]);
  let selector = useSelector(side_menu_data);
  useEffect(() => {
    setnavItems(selector);
  }, [selector]);

  return (
    <div className="nav-wrapper">
      <Nav className="nav--no-borders flex-column">
        {navItems.map((item, idx) => (
          <SidebarNavItem
            OnClick={() => {
              dispatch(CloseSideMenu());
            }}
            key={idx}
            item={item}
          />
        ))}
        <SidebarNavItem
          OnClick={() => {
            dispatch(userLogOut());
            dispatch(CloseSideMenu());
          }}
          item={{
            title: "log out",
            htmlBefore: '<i class="material-icons">logout</i>',
            htmlAfter: "",
            path: "/home",
          }}
        />
      </Nav>
    </div>
  );
};

export default SidebarNavItems;
