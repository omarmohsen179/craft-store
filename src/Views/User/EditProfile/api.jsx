import REQUEST from "../../../Service/Request";

export const CHANGE_PASSWORD = async (e) => {
  return await REQUEST({
    method: "put",
    url: "auth/change-password",
    data: e,
  });
};
export const EDIT_PROFILE = async (e) => {
  return await REQUEST({
    method: "post",
    url: "auth/update",
    data: e,
  });
};
export const USER_DATA = async (e) => {
  return await REQUEST({
    method: "get",
    url: "auth/user-data",
  });
};
