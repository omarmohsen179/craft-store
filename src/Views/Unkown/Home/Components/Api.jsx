import REQUEST from "../../../../Service/Request";

export async function getCategories() {
  return await REQUEST({
    method: "GET",
    url: `category/headx`,
  }).catch((err) => console.log(err));
}
export async function getSliderData() {
  return await REQUEST({
    method: "GET",
    url: `automatic_slider`,
  }).catch((err) => console.log(err));
}
