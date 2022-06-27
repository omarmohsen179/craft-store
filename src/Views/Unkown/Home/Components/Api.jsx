import REQUEST from "../../../../Service/Request";

export async function GET_CATEGORIES_HEAD() {
  return await REQUEST({
    method: "GET",
    url: `category/headx`,
  }).catch((err) => console.log(err));
}
export async function GET_SLIDER_DATA() {
  return await REQUEST({
    method: "GET",
    url: `automatic_slider`,
  }).catch((err) => console.log(err));
}
