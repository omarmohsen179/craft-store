import axios from "axios";

import { GetFromLocalStorage } from "./LocalStorageService";
import config from "../config";

const { localStorageTokenKey, localStorageReadIdKey, apiEndPoint } = config;

let request = async (config) => {
  let userDate = JSON.parse(localStorage.getItem("data"));

  // !For Debug remove it
  //readId = "0";
  //token =
  //  "IAAAADKLnjYQe3Uf4hlz4iGt38liFe+ZCHqRS3qLZR2NZAFscTcjEcPnQiV3zapIBx65mCrxwIoN5+QjbCHhD6xBtgfIg5E+71rCYuBVz9PEepA4kjMWczXgvSLZzt+BuN2B95ODHg5bmR4Z5CJcoEvN+PwBjcIRtc4YXDy0Cp5keFrhtF39INj0btr6Oovqd8FWusgLhQ==";
  //!

  if (!userDate.Read_id || !userDate.Token) {
    window.location.replace("/login");
    return;
  }

  config.url = `${apiEndPoint}${config.url}`;
  axios.defaults.headers = {
    ...axios.defaults.headers,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Max-Age": "200",
    Token: userDate.Token,
    Read_id: userDate.Read_id,
    // Authorization: `bearer ${token}`,
  };
  config.data = {
    ...config.data,
    // Token: userDate.Token,
    // Read_id: userDate.Read_id,
  };

  let data = await axios(config).then((response) => {
    return JSON.stringify(response.data);
  });

  data = JSON.parse(data);

  return data;
};

export { request };
