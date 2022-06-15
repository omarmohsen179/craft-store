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
    return <AppHero />;
  }

  return dataSource ? (
    <MasterTable
      dataSource={dataSource}
      colAttributes={[
        {
          field: "name",
          caption: "Name",
          alignment: "center",
        },
        {
          field: "name_en",
          caption: "Name (EN)",
          alignment: "center",
        },
      ]}
    ></MasterTable>
  ) : (
    <LoadingAnimation />
  );
}

export default ListForm;
