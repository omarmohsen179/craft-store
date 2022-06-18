import REQUEST from "../../../../Service/Request";

export const getCategories = async (e) => {
  return await REQUEST({
    method: "GET",
    url: `category/headx`,
  }).catch((err) => console.log(err));
};
