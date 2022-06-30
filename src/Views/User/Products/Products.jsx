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
import LoadingPanel from "../../../Components/LoadingPanel";
import { ITEMS } from "./ProductForm/api";
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

  const showForm = useMemo(() => {
    return status === "ADD" || status === "UPDATE";
  }, [status]);

  useEffect(() => {
    setloading(true);
    ITEMS()
      .then((res) => setProducts(res))
      .catch(() => alert(t("Error! Try Again later")))
      .finally(() => setloading(false));
  }, []);

  let redirectAdd = useCallback(() => {
    setselectedItem(0);
    setHide(false);
  }, []);

  let redirectEdit = useCallback((event) => {
    if (event.data) {
      setselectedItem(event.data);

      setHide(false);
    }
  }, []);

  const [selectedItem, setselectedItem] = useState(-1);
  const [loading, setloading] = useState(false);
  const [hide, setHide] = useState(false);
  return (
    <Form style={{ padding: 20 }}>
      <Card className="card-user">
        <LoadingPanel loading={loading} onHiding={() => setloading(false)} />
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
            allowAdd={false}
            allowDropInsideItem={false}
          />
        </CardBody>
      </Card>
      {selectedItem.id > 0 && (
        <ProductForm
          hide={hide}
          setloading={setloading}
          setHide={setHide}
          intial_data={selectedItem}
        />
      )}
    </Form>
  );
}
export default Products;
