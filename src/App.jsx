import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Unknown from "./Layout/Unknown";

import { useTranslation } from "react-i18next";
import User from "./Layout/User";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userLoginLocalStorage } from "./Store/AuthReducer";
import { RetrieveUserData } from "./Service/LocalStorage/LocalStorage";
import ErrorBoundary from "antd/lib/alert/ErrorBoundary";

function App() {
  let dispatch = useDispatch();
  const { i18n } = useTranslation();
  if (i18n.language === "en-US") {
    i18n.init();
    document.documentElement.setAttribute("lang", "en");
    i18n.changeLanguage("en");
  }
  useEffect(() => {
    const data = async () =>
      (await RetrieveUserData()) &&
      dispatch(await userLoginLocalStorage(await RetrieveUserData()));
    data();
  }, []);
  return (
    <>
      <ErrorBoundary>
        <Switch>
          <Route path="/dashboard" component={User} />
          <Route path="/" component={Unknown} />
        </Switch>
      </ErrorBoundary>
    </>
  );
}

export default App;
