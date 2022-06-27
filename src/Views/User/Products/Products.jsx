import { useTranslation } from "react-i18next";
import "./index.css";
import React, {
  FC,
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
} from "react";
import { useHistory } from "react-router-dom";
// React-Strap
import { Card, Form, CardBody, CardHeader } from "reactstrap";
import "devextreme/dist/css/dx.light.css";

import ProductForm from "./ProductForm/ProductForm";
import REQUEST from "../../../Service/Request";
import ControlsTable from "../../../Components/ControlsTable/ControlsTable";
function Products() {
  const { t, i18n } = useTranslation();
  const productsItemColAttributes = useMemo(() => {
    return [
      {
        field: "name",
        caption: t("Product Name"),
        alignment: "center",
      },
      {
        field: "name_en",
        caption: t("Product Name English"),
        alignment: "center",
      },
      {
        field: "category",
        caption: t("Category Name"),
        alignment: "center",
        grouped: true,
        isVisable: false,
      },
    ];
  }, [t]);

  const [status, setStatus] = useState("IDLE");

  const [products, setProducts] = useState();

  const history = useHistory();

  const showForm = useMemo(() => {
    return status === "ADD" || status === "UPDATE";
  }, [status]);

  useEffect(() => {
    let config = {
      method: "GET",
      url: "items",
    };

    REQUEST(config).then((response) => {
      setProducts(response);
    });
  }, []);

  let redirectAdd = useCallback(() => {
    setselectedItem(0);
    setIsClicked(true);
    setHide(false);
  }, []);

  let redirectEdit = useCallback((event) => {
    console.log("double click");
    if (event.data) {
      setselectedItem(event.data);
      setIsClicked(true);
      setHide(false);
    }
  }, []);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedItem, setselectedItem] = useState(-1);

  const [hide, setHide] = useState(false);
  return (
    <Form style={{ padding: 20 }}>
      <Card className="card-user">
        <CardHeader>
          <h4>{t("Products")}</h4>
        </CardHeader>
        <CardBody>
          <ControlsTable
            disabled={showForm}
            colAttributes={productsItemColAttributes}
            dataSource={products}
            onAddButtonClicked={redirectAdd}
            onRowDoubleClick={redirectEdit}
            allowDelete={false}
            // onRowRemoving={removeProduct}
            allowAdd={false}
            allowDropInsideItem={false}
          />
        </CardBody>
      </Card>
      {selectedItem.id > 0 && (
        <ProductForm
          hide={hide}
          setHide={setHide}
          isClicked={isClicked}
          intial_data={selectedItem}
        />
      )}
    </Form>
  );
}
export default Products;
