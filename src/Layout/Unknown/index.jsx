import { useEffect } from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";

import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Home from "../../Views/Unkown/Home";

import Footer from "../../Components/Footer/index2";
import LangueNavBar from "../../Components/LangueNavBar";
import ScrollTop from "../../Components/ScrollTop";

import Login from "../../Views/Auth/Login";

import ProductList from "../../Views/Unkown/ProductList";
import Product from "../../Views/Unkown/Product";
import Blogs from "../../Views/Unkown/Blogs";

import Cart from "../../Views/Unkown/Cart";
import ForgetPassword from "../../Views/Auth/ForgetPassword";
import CreateAccount from "../../Views/Auth/CreateAccount";
import ResetPassword from "../../Views/Auth/ResetPassword";
import EmailConfirmation from "../../Views/Auth/Confirm";
import ContactUs from "../../Views/Unkown/ContactUs";

function Unknown({ match }) {
  useEffect(() => (window.onscroll = onScroll), []);
  const onScroll = () => {
    try {
      var navbar = document.getElementById("navbar");
      var navbarin = document.getElementById("nav-up-container-id");
      var mybutton = document.getElementById("return-top-button");
      var content = document.getElementsByClassName("dropdown-content");
      var sticky = navbar?.offsetTop;
      if (window.pageYOffset > sticky + 50) {
        navbar.classList.add("sticky");
        for (var i = 0; i < content.length; i++) {
          content[i].classList.add("down-nav");
        }
        mybutton.style.display = "block";
        navbarin.classList.remove("nav-up-container");
      } else {
        navbar.classList.remove("sticky");
        mybutton.style.display = "none";
        for (var i = 0; i < content.length; i++) {
          content[i].classList.remove("down-nav");
        }
        navbarin.classList.add("nav-up-container");
      }
    } catch (err) {}
  };
  return (
    <div>
      <ScrollTop />

      <div className="header">
        <LangueNavBar />
      </div>
      <div id="navbar">
        <NavigationBar />
      </div>
      <div className="main_body">
        <Switch>
          <Route exact path={`${match.url}`} component={Home} />
          <Route exact path={`${match.url}log-in`} component={Login} />
          <Route
            path={`${match.url}forget-password`}
            exact
            component={ForgetPassword}
          />

          <Route
            path={`${match.url}confirm`}
            exact
            component={EmailConfirmation}
          />
          <Route path={`${match.url}list`} component={ProductList} />
          <Route
            path={`${match.url}reset-password`}
            exact
            component={ResetPassword}
          />
          <Route path={`${match.url}item`} component={Product} />
          <Route path={`${match.url}blogs`} component={Blogs} />
          <Route path={`${match.url}cart`} component={Cart} />
          <Route
            path={`${match.url}create-account`}
            component={CreateAccount}
          />
          <Route path={`${match.url}contact-us`} component={ContactUs} />
          <Route
            path={`${match.url}not-found`}
            component={() => <h1>Not Found</h1>}
          />
          <Redirect to={"/"} />
        </Switch>
      </div>
      <button
        onClick={() => window.scrollTo(0, 0)}
        id="return-top-button"
        title="Go to top"
      >
        <i className="fas fa-angle-up"></i>
      </button>
      <Footer />
    </div>
  );
}

export default Unknown;
