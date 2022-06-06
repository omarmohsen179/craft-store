import React from "react";
import { Nav } from "shards-react";
import { NavLink as RouteNavLink } from "react-router-dom";
import { NavItem, NavLink } from "shards-react";

import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { side_menu_data } from "../../../../Store/SidebarReducer";
const SidebarNavItem = ({ item }) => (
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
);

const SidebarNavItems = (props) => {
  const [navItems, setnavItems] = useState([]);
  let selector = useSelector(side_menu_data);
  useEffect(() => {
    setnavItems(selector);
  }, [selector]);

  return (
    <div className="nav-wrapper">
      <Nav className="nav--no-borders flex-column">
        {navItems.map((item, idx) => (
          <SidebarNavItem key={idx} item={item} />
        ))}
      </Nav>
    </div>
  );
};

export default SidebarNavItems;
