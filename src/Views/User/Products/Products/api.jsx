import REQUEST from "../../../../Service/Request";

export const PRODUCT_ID = async (e) => {
  return await REQUEST({
    method: "post",
    url: "auth/create-account",
    data: e,
  });
};
