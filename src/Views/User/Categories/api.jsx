import { ApiBaseUrl } from "../../../Service/config";
import REQUEST from "../../../Service/Request";
import { request } from "../../../Service/CallAPI";

export const INSERT_CATEGORY = async (e) => {
  return await REQUEST({
    method: "POST",
    url: `category`,
    data: {
      ...e,
      children: [],
      rank: 0,
      image_path: "",
      items: [],
    },
  }).catch((err) => console.log(err));
};
export const ITEMS = async (e) => {
  return await REQUEST({
    method: "get",
    url: "/items",
  });
};
export const GET_CATEGORIES = async (e) => {
  return await REQUEST({
    method: "GET",
    url: `category`,
  });
};

export const DELETE_CATEGORY = async (e) => {
  return await REQUEST({
    method: "DELETE",
    url: `category/${e}`,
  });
};
export const UPDATE_CATEGORIES_ITEMS = async (e) => {
  return await REQUEST({
    method: "put",
    url: `categories/items/${e}`,
  });
};

export const EDIT_CATEGORY = async (e) => {
  return await REQUEST({
    method: "PUT",
    url: `category`,
    data: {
      _id: e.oldData.Id,
      children: [],
      image_path: "",
      items: [],
      rank: 0,
      parent: e.oldData.parent,
      ...e.newData,
    },
  });
};
export const POST_UPDATE_CATEGORY = async (categoryData) => {
  return await REQUEST({
    method: "PUT",
    url: `category/list`,
    data: categoryData,
  }).catch((err) => console.log(err));
};

export const ITEM_ID = async (categoryId, selectedItemsFinal) => {
  return await REQUEST({
    method: "PUT",
    url: `category/items/${categoryId}`,
    data: selectedItemsFinal,
  });
};
export const UPLOAD_IMAGE_LIST = async (formData, id) => {
  return await REQUEST({
    method: "POST",
    url: `item_images/${id}`,
    data: formData,
  });
};
