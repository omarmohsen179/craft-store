import REQUEST from "../../../../Service/Request";

export const ITEM_ID = async (e) => {
  return await REQUEST({
    method: "get",
    url: "items/" + e,
  });
};
