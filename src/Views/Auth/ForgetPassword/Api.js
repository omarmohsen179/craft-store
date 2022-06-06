import REQUEST from "../../../Service/Request";

export const RESET_PASSWORD_REQUEST = async (e) => {
  return await REQUEST({
    method: "post",
    url: "auth/reset-password-request/" + e,
  });
};
