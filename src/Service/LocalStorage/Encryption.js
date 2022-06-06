import CryptoJS from "crypto-js";
export function AESTest(word) {
  word = JSON.stringify(word);
  let key = "12345678901234567890123456789012";
  key = CryptoJS.enc.Utf8.parse(key);

  let iv = "1234567890123456";
  iv = CryptoJS.enc.Utf8.parse(iv);

  let encrypted = CryptoJS.AES.encrypt(word, key, { iv: iv });
  encrypted = encrypted.toString();
  let decrypted = CryptoJS.AES.decrypt(encrypted, key, { iv: iv });
  decrypted = decrypted.toString(CryptoJS.enc.Utf8);
}
export const EncryptAES256 = (data) => {
  //delete data.User;
  data = JSON.stringify(data);
  let key = "12345678901234567890123456789012";
  key = CryptoJS.enc.Utf8.parse(key);

  let iv = "1234567890123456";
  iv = CryptoJS.enc.Utf8.parse(iv);

  let encrypted = CryptoJS.AES.encrypt(data, key, { iv: iv });
  encrypted = encrypted.toString();

  return encrypted;
};
export const DecryptAES256 = (data) => {
  let key = "12345678901234567890123456789012";
  key = CryptoJS.enc.Utf8.parse(key);
  let iv = "1234567890123456";
  iv = CryptoJS.enc.Utf8.parse(iv);
  let decrypted = CryptoJS.AES.decrypt(data, key, { iv: iv });
  decrypted = decrypted.toString(CryptoJS.enc.Utf8);

  return JSON.parse(decrypted);
};
