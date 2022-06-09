import axios from "axios";

let request = async (config) => {
  // !For Debug remove it
  const readId = "0";
  const token =
    "IAAAADKLnjYQe3Uf4hlz4iGt38liFe+ZCHqRS3qLZR2NZAFscTcjEcPnQiV3zapIBx65mCrxwIoN5+QjbCHhD6xBtgfIg5E+71rCYuBVz9PEepA4kjMWczXgvSLZzt+BuN2B95ODHg5bmR4Z5CJcoEvN+PwBjcIRtc4YXDy0Cp5keFrhtF39INj0btr6Oovqd8FWusgLhQ==";
  //!

  config.url = `${"https://erp.almedadsoft.com/mdfunctions"}${config.url}`;
  axios.defaults.headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Max-Age": "200",
    Token: token,
    Read_id: readId,
    // "LanguageID":
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
