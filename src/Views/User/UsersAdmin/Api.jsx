import { ApiBaseUrl } from "../../../Service/config";
import REQUEST from "../../../Service/Request";
import { request } from "../../../Service/CallAPI";

export const INSERT = async (e) => {
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
  return await request({
    method: "POSt",
    url: "/SearchAboutItems",
    data: {
      ItemNumber: "1",
      ItemName: "",
      SearchName: "",
      clas: "",
      qunt: -1000,
      state: 0,
      sno_id: 0,
      msdar: "",
      addres: "",
      code_no: "",
      m_no: 0,
      emp_id: 0,
      typ_id: 0,
      skip: 0,
      take: 20,
      FilterQuery: "",
    },
  }).catch((err) => console.log(err));
};
export const GetCategories = async (e) => {
  return await REQUEST({
    method: "GET",
    url: `category`,
  }).catch((err) => console.log(err));
};

export const DeleteCategory = async (e) => {
  return await REQUEST({
    method: "DELETE",
    url: `category/${e}`,
  }).catch((err) => console.log(err));
};

export const EditCategory = async (e) => {
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
  }).catch((e) => (e.cancel = true));
};
export const PostUpdatedCategories = async (categoryData) => {
  return await REQUEST({
    method: "PUT",
    url: `category/list`,
    data: categoryData,
  }).catch((err) => console.log(err));
};

export const selectedItems = async (categoryId, selectedItemsFinal) => {
  return await REQUEST({
    method: "PUT",
    url: `category/items/${categoryId}`,
    data: selectedItemsFinal,
  }).catch((err) => console.log(err));
};
export const uploadImageList = async (formData, id) => {
  return await REQUEST({
    method: "POST",
    url: `item_images/${id}`,
    data: formData,
  }).catch((err) => console.log(err));
};
