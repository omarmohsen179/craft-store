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
import { ITEMS } from "./Api";
import AppHero from "../../Unkown/Home/Components/hero";
import UploadImageButton from "../../../Components/UploadImageButton/UploadImageButton";
import { ApiBaseUrl } from "../../../Service/config";
import MasterTable from "../../../Components/MasterTable/MasterTable";
import TableSlider from "./components/TableSlider";

function ListForm({ selectedItemsFinal, setSelectedItemsFinal }) {
  const [dataSource, setDataSource] = useState();

  const [selectedItems, setSelectedItems] = useState([]);
  console.log(selectedItems);
  console.log(selectedItemsFinal);
  let handleGetImages = (event) => {
    let files = event.target.files;
    setimages((prevState) => {
      return [...prevState, ...files];
    });
  };

  const [images, setimages] = useState([]);
  let handleRemoveImage = (element) => {
    setimages((prevState) => prevState.filter((ele) => ele !== element));
  };

  let handleRemoveAllImages = () => {
    setimages([]);
  };
  useEffect(() => {
    setSelectedItemsFinal(selectedItems.map((el) => el.id));
  }, [selectedItems]);

  useEffect(() => {
    // Get items
    ITEMS()
      .then((res) => setDataSource(res.data))
      .catch((err) => console.log(err));
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
    >
      <Column width={200} type="buttons" caption="Upload Images">
        <Button>
          <UploadImageButton
            isMultiple={true}
            handleGetImages={(e) => handleGetImages(e)}
            handleRemoveImage={handleRemoveImage}
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
        </Button>
      </Column>
    </MasterTable>
  ) : (
    <LoadingAnimation />
  );
}

export default ListForm;
