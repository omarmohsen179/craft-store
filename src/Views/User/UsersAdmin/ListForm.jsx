import React, { useEffect, useState } from "react";

import { request } from "../../../Service/CallAPI";
import ButtonComponent from "../../../Components/ButtonComponent";

import DataGrid, {
  Column,
  Selection,
  SearchPanel,
} from "devextreme-react/data-grid";

import LoadingAnimation from "../../../Components/LoadingAnimation/LoadingAnimation";

function ListForm() {
  const [dataSource, setDataSource] = useState();

  const [selectedItems, setSelectedItems] = useState([]);
  console.log(selectedItems);

  const ITEMS = async (e) => {
    return await request({
      method: "post",
      url: "/SearchAboutItems",
      data: {
        ItemNumber: "1",
        ItemName: "",
        SearchName: "",
        clas: "",
        qunt: 0,
        state: 0,
        sno_id: 0,
        msdar: "",
        addres: "",
        code_no: "",
        m_no: 0,
        emp_id: 0,
        typ_id: 0,
        skip: 0,
        take: 20,
        FilterQuery: "",
      },
    });
  };
  useEffect(() => {
    ITEMS()
      .then((res) => setDataSource(res.data))
      .catch((err) => console.log(err));
  }, []);

  return dataSource ? (
    <DataGrid
      dataSource={dataSource}
      keyExpr="id"
      showBorders={true}
      onSelectionChanged={(e) => setSelectedItems(e.selectedRowsData)}
      height={"85%"}
      pager={false}
      scrolling
    >
      <Selection
        mode="multiple"
        selectAllMode={"allPages"}
        showCheckBoxesMode={"always"}
      />
      <SearchPanel visible={true} />

      <Column dataField="e_name" caption="Name" />
    </DataGrid>
  ) : (
    <LoadingAnimation />
  );
}

export default ListForm;
