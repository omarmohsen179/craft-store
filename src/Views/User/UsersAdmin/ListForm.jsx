import React, { useEffect, useState } from "react";

import { request } from "../../../Service/CallAPI";
import ButtonComponent from "../../../Components/ButtonComponent";

import DataGrid, {
  Column,
  Selection,
  SearchPanel,
  Button,
} from "devextreme-react/data-grid";

import LoadingAnimation from "../../../Components/LoadingAnimation/LoadingAnimation";
import { ITEMS, uploadImageList } from "./Api";
import AppHero from "../../Unkown/Home/Components/hero";
import UploadImageButton from "../../../Components/UploadImageButton/UploadImageButton";
import { ApiBaseUrl } from "../../../Service/config";
import MasterTable from "../../../Components/MasterTable/MasterTable";
import TableSlider from "./components/TableSlider";
import REQUEST from "../../../Service/Request";

function ListForm({
  selectedItemsFinal,
  setSelectedItemsFinal,
  alreadySelectedItems,
}) {
  const [dataSource, setDataSource] = useState();

  const [selectedItems, setSelectedItems] = useState([]);
  console.log(selectedItems);
  console.log(selectedItemsFinal);

  console.log("already", alreadySelectedItems);

  const [images, setImages] = useState([]);

  let handleGetImages = (e, ex) => {
    console.log(e);
    console.log(ex);

    let files = e.target.files;
    const id = ex.data.data.id;
    const data = [...files];
    setImages((prevState) => {
      return [...prevState, ...files];
    });

    let formData = new FormData();
    if (data && data.length > 0) {
      for (var i = 0; i < data.length; i++) {
        formData.append("files", data[i]);
      }
    }

    uploadImageList(formData, id).then((res) => console.log(res));
  };

  // let handleRemoveImage = (element) => {
  //   setImages((prevState) => prevState.filter((ele) => ele !== element));
  // };

  let handleRemoveAllImages = () => {
    setImages([]);
  };
  useEffect(() => {
    setSelectedItemsFinal(selectedItems.map((el) => el.id));
  }, [selectedItems]);

  useEffect(() => {
    // Get items
    ITEMS().then((res) => setDataSource(res.data));
  }, []);

  function cellRender(data) {
    return <TableSlider />;
  }

  const colAttributes = [
    {
      field: "item_name",
      caption: "Name",
      // alignment: "center",
    },
    {
      field: "e_name",
      caption: "Name (EN)",
      // alignment: "center",
    },

    {
      field: "image",
      caption: "Images",
      cellRender: cellRender,
      width: 400,
      alignment: "center",
    },
  ];

  return dataSource ? (
    <MasterTable
      dataSource={dataSource}
      colAttributes={colAttributes}
      height={"80%"}
      columnChooser={false}
      showCheckBoxesMode={"always"}
      onSelectionChanged={(e) => setSelectedItems(e.selectedRowsData)}
      // onSelectionChanged={(e) => console.log(e)}
      keyExpr="id"
      selectedRowKeys={alreadySelectedItems}
    >
      <Column width={200} type="buttons" caption="Upload Images">
        <Button
          component={(ex) => (
            <UploadImageButton
              isMultiple={true}
              handleGetImages={(e) => handleGetImages(e, ex)}
              // handleRemoveImage={handleRemoveImage}
              handleRemoveAllImages={handleRemoveAllImages}
              showImages={false}
              imagesFiles={
                images
                  ? images.map((da) => {
                      return typeof da === "string" ? ApiBaseUrl + da : da;
                    })
                  : []
              }
            />
          )}
        ></Button>
      </Column>
    </MasterTable>
  ) : (
    <LoadingAnimation />
  );
}

export default ListForm;
