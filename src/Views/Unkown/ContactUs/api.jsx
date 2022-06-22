import REQUEST from "../../../Service/Request";

export async function PostContactUs(data) {
  return await REQUEST({
    method: "POST",
    url: "contact_us",
    data: data,
  }).catch((err) => console.log(err));
}
