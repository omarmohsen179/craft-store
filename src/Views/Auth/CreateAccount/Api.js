import REQUEST from "../../../Service/Request";

export const CREATE_ACCOUNT = async (e) => {
  return await REQUEST({
    method: "post",
    url: "auth/create-account",
    data: e,
  });
};
export const CHECK_EMAIL = async (e) => {
  return await REQUEST({
    method: "post",
    url: "auth/check-email/" + e,
  });
};
export const CHECK_USERNAME = async (e) => {
  return await REQUEST({
    method: "post",
    url: "auth/check-username/" + e,
  });
};
