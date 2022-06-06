import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CategoryList from "../../CategoriesList";

function SideMenu({ pages, navigation, submenu, openMenu, closeMenu }) {
  const { t, i18n } = useTranslation();
  return (
    <div id="mySidenav" className="sidenav">
      <ul className=" remove-dot ">
        <li>
          <div
            className="closebtn text-color-hover "
            onClick={() => (submenu ? openMenu() : closeMenu())}
          >
            &times;
          </div>
        </li>
        {pages.current.map((ele, index) => (
          <li key={index}>
            <div
              id={"dropdownmain" + index}
              className={
                ele?.dropdown
                  ? i18n.language === "en"
                    ? "collapsible "
                    : "collapsibleAr"
                  : " uncollapsible"
              }
              onClick={
                ele?.dropdown
                  ? () => {
                      document
                        .getElementById("dropdown" + index)
                        .classList.toggle("activecollapsible");
                      document
                        .getElementById("dropdownmain" + index)
                        .classList.toggle("activecollapsible34");
                    }
                  : (e) => navigation(ele.route)
              }
            >
              <i style={{ padding: "3px" }} className={ele.icon}></i>
              {ele.name}
            </div>
            {ele?.dropdown ? (
              <div id={"dropdown" + index} className=" collapsiblecontent">
                <CategoryList
                  style={{
                    overflowY: "scroll",
                    overflowX: "hidden",
                    height: "400px",
                  }}
                />
              </div>
            ) : null}
          </li>
        ))}
      </ul>
      <div className="sidenav-login">
        <ul className=" remove-dot ">
          <li
            className="uncollapsible"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>Sign / Register</div>
            <div>
              <i className=" fas fa-user"></i>
            </div>
          </li>
          <li
            className="uncollapsible"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div
              onClick={() => {
                submenu ? openMenu() : closeMenu();
                i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
              }}
            >
              {t("العربية")}
            </div>
            <div>
              <i className=" fas fa-language"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
