import { combineReducers } from "redux";
import { auth } from "./AuthReducer";
import { sidemenu } from "./SidebarReducer";

export default combineReducers({
  auth: auth,
  sidemenu: sidemenu,
});
