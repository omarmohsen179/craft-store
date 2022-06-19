import axios, { AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useState } from "react";
import { useMemo } from "react";

import { useHistory } from "react-router-dom";
import { ApiBaseUrl } from "../Service/config";
import REQUEST from "../Service/Request";
import ControlsTable from "../Views/User/Products/Products/Copmponents/ControlsTable/ControlsTable";

export default function AdminSection({
  data = [],
  component: Component,
  colAttributes = [],
  controller,
  productId,
  allowEdit = "false",
  allowReordering = false,
  onDragChange,
  onReorder,
  showDragIcons,
  addInput = false,
  setValues,
  handleChange,
  values,
  defaultValues,
}) {
  console.log("admin values", values);
  let history = useHistory();

  const [status, setStatus] = useState("_status");

  const [itemToUpdate, setItemToUpdate] = useState();

  const [records, setRecords] = useState([]);

  useEffect(() => {
    if (data) {
      data?.map((item) => {
        if (item["image_path"] && !item["image_path"].includes(ApiBaseUrl)) {
          item["image_path"] = `${ApiBaseUrl}${item["image_path"]}`;
        }
        return item;
      });
      setRecords([...data]);
    }
  }, [data]);
  console.log(records);
  // Internal Updates
  const updateRowHandle = useCallback((e) => {
    // setItemToUpdate(e.data);
    setStatus("UPDATE");
    setValues({
      ...e.data,
      image_path: e.data.image_path.replace(`${ApiBaseUrl}`, ""),
    });
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
    (data) => {
      console.log(data);
      let formData = new FormData();
      if (data.image_path.toString().includes(ApiBaseUrl)) {
        // data.image_path = data.image_path.replace(`${ApiBaseUrl}`, "");
      } else {
        formData.append("image_path", data.image_path);
        delete data.image_path;
      }

      formData.append("data", JSON.stringify(data));
      let config = {
        method: status === "ADD" ? "POST" : "PUT",
        // method: status === "ADD" ? "POST" : "POST",
        url: controller,
        data: formData,
        //data: data,
      };

      REQUEST(config)
        .then((response) => {
          if (
            response.image_path &&
            !response.image_path?.includes(ApiBaseUrl)
          ) {
            response.image_path = `${ApiBaseUrl}${response.image_path}`;
          }
          if (
            response["image_path"] &&
            !response["image_path"].includes(ApiBaseUrl)
          ) {
            response["image_path"] = `${ApiBaseUrl}${response["image_path"]}`;
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
    return item?.type ? item?.type[0] : "";
  }, []);
  const cancelForm = useCallback(() => {
    setStatus("IDLE");
    setItemToUpdate(undefined);
  }, []);

  console.log(values);

  return (
    <>
      <ControlsTable
        disabled={showForm}
        colAttributes={colAttributes}
        dataSource={records}
        onAddButtonClicked={() => {
          setStatus("ADD");
          setValues(defaultValues);
        }}
        onRowClick={allowEdit === "true" && updateRowHandle}
        onRowRemoving={deleteItem}
        allowReordering={allowReordering}
        onReorder={onReorder}
        onDragChange={onDragChange}
        showDragIcons={showDragIcons}
      />
      {showForm && (
        <Component
          itemToUpdate={itemToUpdate}
          productId={productId}
          onSubmit={saveForm}
          onCancel={cancelForm}
          addInput={addInput}
          handleChange={handleChange}
          setValues={setValues}
          values={values}
        />
      )}
    </>
  );
}
