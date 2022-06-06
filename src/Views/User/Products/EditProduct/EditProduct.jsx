import React, { useCallback, useEffect, useState } from "react";
import CrudTable from "../../../../Components/CrudTable/CrudTable";

import DataGrid, {
  Column,
  Editing,
  Popup,
  Paging,
  Lookup,
  Form,
} from "devextreme-react/data-grid";
import "devextreme-react/text-area";
import { Item } from "devextreme-react/form";
import SquaredInput from "../../../../Components/SquaredInput";
import ProductForm from "./ProductForm";
import { Card, CardBody, CardHeader } from "reactstrap";
import { useTranslation } from "react-i18next";

function EditProduct() {
  const [data, setData] = useState([
    { ID: 1, name: "ps5", price: "16000", quantity: "20" },
    { ID: 2, name: "ps4", price: "8000", quantity: "14" },
    { ID: 3, name: "ps3", price: "4000", quantity: "20" },
    { ID: 4, name: "ps3", price: "4000", quantity: "20" },
    { ID: 4, name: "ps3", price: "4000", quantity: "20" },
    { ID: 4, name: "ps3", price: "4000", quantity: "20" },
    { ID: 4, name: "ps3", price: "4000", quantity: "20" },
    { ID: 4, name: "ps3", price: "4000", quantity: "20" },
    { ID: 4, name: "ps3", price: "4000", quantity: "20" },
    { ID: 4, name: "ps3", price: "4000", quantity: "20" },
    { ID: 4, name: "ps3", price: "4000", quantity: "20" },
    { ID: 4, name: "ps3", price: "4000", quantity: "20" },
    { ID: 4, name: "ps3", price: "4000", quantity: "20" },
  ]);

  const colAttributes = [
    {
      field: "name",
      caption: "Name",
    },
    {
      field: "price",
      caption: "Price",
    },
    {
      field: "quantity",
      caption: "Quantity",
    },
  ];

  const { t } = useTranslation();

  return (
    <div className="content" style={{ padding: 20 }}>
      <Card className="card-user">
        <CardHeader>
          <h4>{t("Edit Products")}</h4>
        </CardHeader>
        <CardBody>
          <CrudTable
            data={data}
            setData={setData}
            // onRowRemoving={(event) => (event.cancel = true)}
            colAttributes={colAttributes}
            FormComponent={ProductForm}
          />
        </CardBody>
      </Card>
    </div>
  );
}

export default EditProduct;
