import REQUEST from "../../../Service/Request";

export const RESET_PASSWORD = async (e) => {
  return await REQUEST({
    method: "post",
    url: "auth/reset-password",
    data: e,
  });
};
