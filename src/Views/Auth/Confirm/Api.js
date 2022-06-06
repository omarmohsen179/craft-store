import REQUEST from "../../../Service/Request";

export const CONFIRM = async (e) => {
  return await REQUEST({
    method: "post",
    url: "auth/confirm",
    data: e,
  });
};
