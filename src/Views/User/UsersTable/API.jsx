import REQUEST from "../../../Service/Request";

export async function getUsers() {
  return await REQUEST({
    method: "GET",
    url: `auth/`,
  }).catch((err) => console.log(err));
}
