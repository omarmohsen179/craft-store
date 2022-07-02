import { useEffect, useState } from "react";
import { ITEMS } from "../../Views/User/Categories/api";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import MasterTable from "../MasterTable/MasterTable";

function ListForm({
  selectedItemsFinal,
  setSelectedItemsFinal,
  alreadySelectedItems,
}) {
  const [dataSource, setDataSource] = useState();

  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    setSelectedItemsFinal(selectedItems.map((el) => el.id));
  }, [selectedItems]);

  useEffect(() => {
    // Get items
    ITEMS().then((res) => setDataSource(res));
  }, []);

  const colAttributes = [
    {
      field: "item_name",
      caption: "name",
      // alignment: "center",
    },
    {
      field: "name_en",
      caption: "Name (EN)",
      // alignment: "center",
    },
  ];

  return (
    <MasterTable
      dataSource={dataSource}
      colAttributes={colAttributes}
      height={"80%"}
      columnChooser={false}
      showCheckBoxesMode={"always"}
      onSelectionChanged={(e) => setSelectedItems(e.selectedRowsData)}
      keyExpr="id"
      selectedRowKeys={alreadySelectedItems}
    />
  );
}

export default ListForm;
