import axios from "axios";
const TimeOutLocalStorage = async (time, data) => {
  if (data === null) return null;
  var isPast =
    new Date().getTime() - new Date(data?.ExpiresOn).getTime() < time
      ? false
      : true;
  if (isPast) {
    ClearData();
  }
  return isPast;
};
export const RetrieveUserData = async () => {
  try {
    const data = await localStorage.getItem("UserInfo");
    axios.defaults.headers.Authorization = `bearer ${JSON.parse(data)?.Token}`;
    return data ? JSON.parse(data) : null;
  } catch (error) {
    return null;
  }
};
export const StoreUserData = async (indata) => {
  //data.EnterData = new Date();
  // const maindata = await EncryptAES256(data);
  axios.defaults.headers.Authorization = `bearer ${indata?.Token}`;
  return await localStorage.setItem("UserInfo", JSON.stringify(indata));
};
export const ClearData = async () => {
  try {
    axios.defaults.headers.Authorization = ``;
    await localStorage.removeItem("UserInfo");
  } catch (error) {}
};
export const ClearDataCash = async () => {
  try {
    axios.defaults.headers.Authorization = ``;
    await localStorage.removeItem("RequestCount");
  } catch (error) {}
};
export const RequestCountLogin = async () => {
  try {
    var x = await localStorage.getItem("RequestCountLogin");
    var data = JSON.parse(x);
    var isPast =
      new Date().getTime() - new Date(data?.date).getTime() < 1000 * 60 * 10;
    if (isPast) {
      const input = {
        date: new Date(data?.date),
        count: parseInt(data?.count ? data?.count : 0) + 1,
      };
      await localStorage.setItem("RequestCountLogin", JSON.stringify(input));
    }
  } catch (error) {}
};
