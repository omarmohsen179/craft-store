import axios, { AxiosRequestConfig } from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, CardHeader } from "reactstrap";

import CategoryForm from "./CategoryForm";
import { useHistory } from "react-router-dom";

import AdminSection from "../../../../AdminSection";
import REQUEST from "../../../../Service/Request";
import { ApiBaseUrl } from "../../../../Service/config";

const Categories = () => {
  let history = useHistory();
  const [productsCategories, setProductsCategories] = useState([]);
  const { t } = useTranslation();
  const categoriesColAttributes = useMemo(() => {
    return [
      {
        field: "rank",
        caption: t("Rank"),
        alignment: "center",
      },
      { field: "name", caption: t("Title"), alignment: "center" },
      {
        field: "name_en",
        caption: t("Title En"),
        alignment: "center",
      },
      {
        field: "ProductsCount",
        caption: t("Products Count"),
        alignment: "center",
      },
    ];
  }, [t]);

  useEffect(() => {
    // get categories
    let config = {
      method: "GET",
      url: `${ApiBaseUrl}/api/category`,
    };

    REQUEST(config).then((response) => {
      let _productsCategries = response;
      setProductsCategories([..._productsCategries]);
    });
  }, []);
  const [Auth, setAuth] = useState("SupperAdmin");
  React.useEffect(() => {}, []);
  return (
    <>
      <div className="content" style={{ padding: 20 }}>
        <Card className="card-user">
          <CardHeader>
            <h4>{t("Categories")}</h4>
          </CardHeader>
          <CardBody>
            <AdminSection
              data={productsCategories}
              component={CategoryForm}
              colAttributes={categoriesColAttributes}
              controller={ApiBaseUrl + "/api/auth/test_1"}
              //controller={ApiBaseUrl + "/api/category"}
            />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Categories;
