import { Redirect, Route, Switch } from "react-router-dom";

import { routes } from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { user_selector } from "../../Store/AuthReducer";
import { SetSidebarData, side_menu_data } from "../../Store/SidebarReducer";
import "../../styles/shards-dashboards.1.1.0.css";
import DefaultLayout from "./layout";
export default function User({ match }) {
  let [Routes, setRoutes] = useState([]);
  let dispatch = useDispatch();

  let selector = useSelector(side_menu_data);
  let selectoruser = useSelector(user_selector);
  useEffect(() => setRoutes(selector), [selector]);
  useEffect(() => {
    const routes_data = [
      routes[0],
      routes[1],
      ...routes.filter((ele) => selectoruser?.roles?.includes(ele.key)),
    ];
    setRoutes(routes_data);
    dispatch(SetSidebarData(routes_data));
  }, [selectoruser]);
  return Routes.length > 0 ? (
    <div>
      <DefaultLayout>
        <div style={{ minHeight: "80vh" }}>
          <Switch>
            {Routes?.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            })}
            <Redirect to={"/dashboard/Home"} />
          </Switch>
        </div>
      </DefaultLayout>
    </div>
  ) : null;
}
