import REQUEST from "../../../../Service/Request";

export const ITEM_ID = async (e) => {
  return await REQUEST({
    method: "get",
    url: "items/" + e,
  });
};

export const SUBMIT_ITEM = async (e) => {
  return await REQUEST({
    method: "post",
    url: "items",
    data: e,
  });
};

export const ITEMS = async (e) => {
  return await REQUEST({
    method: "get",
    url: "items",
  });
};
