import REQUEST from "../../../Service/Request";

export const HOME_SLIDER = async (e) => {
  return await REQUEST({
    method: "get",
    url: "home_slider",
  });
};
export const HOME_ITEMS = async (e) => {
  return await REQUEST({
    method: "get",
    url: "home_items",
  });
};
export const AUTOMATIC_SLIDERS = async (e) => {
  return await REQUEST({
    method: "get",
    url: "automatic_slider",
  });
};
export const SUBMIT_HOME_ITEMS = async (e) => {
  return await REQUEST({
    method: "post",
    url: "home_items",
    data: e,
  });
};
