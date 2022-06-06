import axios, { AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useState } from "react";
import { useMemo } from "react";

import { useHistory } from "react-router-dom";
import { ApiBaseUrl } from "../Service/config";
import REQUEST from "../Service/Request";
import ControlsTable from "../Views/User/Products/Products/Copmponents/ControlsTable/ControlsTable";

export default function AdminSection({
  data,
  component: Component,
  colAttributes = [],
  controller,
  productId,
  allowEdit = "false",
}) {
  let history = useHistory();

  const [status, setStatus] = useState("IDLE");

  const [itemToUpdate, setItemToUpdate] = useState();

  const [records, setRecords] = useState([]);

  useEffect(() => {
    if (data) {
      data.map((item) => {
        if (item["Image"] && !item["Image"].includes(ApiBaseUrl)) {
          item["Image"] = `${ApiBaseUrl}${item["Image"]}`;
        }
        return item;
      });
      setRecords([...data]);
    }
  }, [data]);

  // Internal Updates
  const updateRowHandle = useCallback((e) => {
    setItemToUpdate(e.data);
    setStatus("UPDATE");
  }, []);

  const showForm = useMemo(() => {
    return status === "ADD" || status === "UPDATE";
  }, [status]);

  const deleteItem = useCallback(
    async (e) => {
      console.log(e);
      e.cancel = true;

      let config = {
        method: "DELETE",
        url: controller + "/" + e.key.Id,
      };

      REQUEST(config)
        .then(async (response) => {
          setRecords((prevState) => {
            return [...prevState.filter((item) => item.Id !== e.data.Id)];
          });

          setStatus("IDLE");

          //  await e.component.refresh(true);

          //   e.component.cancelEditData();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [controller]
  );

  const saveForm = useCallback(
    (data, images = []) => {
      console.log("data", data);
      data.ProductId = productId;

      if (
        typeof data.Image === "string" &&
        data.Image &&
        data.Image.includes(ApiBaseUrl)
      ) {
        data.Image = data.Image.replace(ApiBaseUrl, "");
      }
      let formData = new FormData();

      for (let [key, value] of Object.entries(data)) {
        formData.append(key.toString(), value);
      }
      if (images && images.length > 0) {
        for (var i = 0; i < images.length; i++) {
          formData.append("imagelist", images[i]);
        }
      }
      formData = new FormData();

      formData.append("image", data.image);
      formData.append(
        "data",
        JSON.stringify({ title: "tit", text: "ddd", data: [1, 2, 3, 4] })
      );
      let config = {
        // method: status === "ADD" ? "POST" : "PUT",
        method: status === "ADD" ? "POST" : "POST",
        url: controller,
        data: formData,
        //data: data,
      };

      REQUEST(config)
        .then((response) => {
          if (response.Image && !response.Image.includes(ApiBaseUrl)) {
            response.Image = `${ApiBaseUrl}${response.Image}`;
          }
          if (response["Image"] && !response["Image"].includes(ApiBaseUrl)) {
            response["Image"] = `${ApiBaseUrl}${response["Image"]}`;
          }

          if (status === "ADD") {
            setRecords([...records, response]);
          } else {
            /* setRecords((prevState) => {
              let index = prevState.findIndex((ele) => ele.Id === response.Id);
              if (index !== -1) {
                prevState[index] = { ...response };
              }
              return [...prevState];
            });*/

            setRecords(
              records.map((da) => {
                if (da.Id === response.Id) {
                  return { ...response };
                }
                return da;
              })
            );
          }

          setStatus("IDLE");

          setItemToUpdate(undefined);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [controller, productId, status, records]
  );
  const [Auth, setAuth] = useState("");
  useEffect(() => {
    let INFI = async () => {
      let x = await checkusertype();
      setAuth(x ? x : "");
    };
    INFI();
  }, []);
  let checkusertype = useCallback(async function () {
    let item = JSON.parse(localStorage.getItem("user") || "{}");
    // history.push("/")
    // !item || !item.type
    //   ?
    //   : await axios
    //       .get(ApiBaseUrl + "/api/check-type", {
    //         headers: {
    //           ...axios.defaults.headers,
    //           Authorization: `bearer ${
    //             JSON.parse(localStorage.getItem("user") || "{}").token
    //           }`,
    //         },
    //       })
    //       .then((res) => {
    //         return res[0] ? res[0] : "";
    //       })
    //       .catch((err) => {
    //         // history.push("/log-in");
    //         // localStorage.removeItem("user");
    //         return "";
    //       });
    return item?.type ? item?.type[0] : "";
  }, []);
  const cancelForm = useCallback(() => {
    setStatus("IDLE");
    setItemToUpdate(undefined);
  }, []);

  return (
    <>
      <ControlsTable
        disabled={showForm}
        colAttributes={colAttributes}
        dataSource={records}
        onAddButtonClicked={() => setStatus("ADD")}
        onRowClick={allowEdit === "true" && updateRowHandle}
        onRowRemoving={deleteItem}
      />
      {showForm && (
        <Component
          data={itemToUpdate}
          productId={productId}
          onSubmit={saveForm}
          onCancel={cancelForm}
        />
      )}
    </>
  );
}
