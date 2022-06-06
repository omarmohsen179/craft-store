import { React, useState } from "react";
import { useHistory } from "react-router";
import MasterTable from "../../../Components/MasterTable/MasterTable";
// import DataGrid, { Column, HeaderFilter } from "devextreme-react/data-grid";

import DataGrid, {
  Column,
  Paging,
  Pager,
  SearchPanel,
  GroupPanel,
  Grouping,
  FilterRow,
  Scrolling,
  HeaderFilter,
  FilterBuilderPopup,
  FilterPanel,
} from "devextreme-react/data-grid";

const columns = [
  {
    field: "name",
    caption: "Name",
  },
  {
    field: "price",
    caption: "Price",
    // alignment: "center",
  },
  {
    field: "quantity",
    caption: "Quantity",
    // alignment: "center",
  },
];

const data = [
  { name: "ps5", price: "16000", quantity: "20" },
  { name: "ps4", price: "8000", quantity: "14" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
];

function Products() {
  return (
    <div style={{ padding: 25 }}>
      <MasterTable
        dataSource={data}
        colAttributes={columns}
        onRowDoubleClick={(e) => useHistory.push("/")}
        onRowRemoving={(e) => console.log(e)}
        allowAdd
      />
    </div>
  );
}

export default Products;
