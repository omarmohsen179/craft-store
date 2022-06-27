// Layout Types
import DefaultLayout from "./layout";
import Orders from "../../Views/User/Orders";
import Web from "../../Views/User/Web";
import EditProfile from "../../Views/User/EditProfile";
import Home from "../../Views/User/Home";
import Products from "../../Views/User/Products/Products";
import Categories from "../../Views/User/Categories";

const layoutPath = "/dashboard";
export const routes = [
  {
    path: layoutPath + "/Home",
    layout: DefaultLayout,
    component: Home,
    key: 0,
    title: "Home",
    htmlBefore: '<i class="fas fa-house-user"></i>',
    exact: true,
    htmlAfter: "",
  },
  {
    path: layoutPath + "/edit-profile",
    layout: DefaultLayout,
    component: EditProfile,
    key: 0,
    title: "edit profile",
    htmlBefore: '<i class="fas fa-pen"></i>',
    htmlAfter: "",
  },
  {
    path: layoutPath + "/orders",
    layout: DefaultLayout,
    key: 2,
    component: Orders,
    title: "order",
    htmlBefore: '<i class="material-icons">note_add</i>',
    htmlAfter: "",
  },
  {
    path: layoutPath + "/categories",
    layout: DefaultLayout,
    key: 2,
    component: Categories,
    title: "categories",
    htmlBefore: '<i class="fas fa-list-ul"></i>',
    htmlAfter: "",
  },
  {
    path: layoutPath + "/products",
    layout: DefaultLayout,
    key: 2,
    component: Products,
    title: "products",
    htmlBefore: '<i class="fas fa-barcode"></i>',
    htmlAfter: "",
  },
  {
    path: layoutPath + "/shop",
    layout: DefaultLayout,
    key: 3,
    // component: Web,
    title: "shop",
    htmlBefore: '<i class="fas fa-shop"></i>',
    htmlAfter: "",
  },
  {
    path: layoutPath + "/web",
    layout: DefaultLayout,
    key: 3,
    component: Web,
    title: "web",
    htmlBefore: '<i class="material-icons">edit</i>',
    htmlAfter: "",
  },
  {
    path: layoutPath + "/users-admin",
    layout: DefaultLayout,
    key: 4,
    // component: UsersAdmin,
    title: "user admin",
    htmlBefore: '<i class="material-icons">vertical_split</i>',
    htmlAfter: "",
  },
];
