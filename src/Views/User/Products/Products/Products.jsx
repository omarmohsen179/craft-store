import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import "./index.css";
import MainProducts from "./Copmponents/MainProducts/MainProducts";

function Products() {
  const { t, i18n } = useTranslation();
  const productsItemColAttributes = useMemo(() => {
    return [
      {
        field: "Icon",
        caption: t("Icon"),
        alignment: "center",
        dataType: "Picture",
      },
      {
        field: "ProductName",
        caption: t("Product Name"),
        alignment: "center",
      },
      {
        field: "ProductNameEn",
        caption: t("Product Name English"),
        alignment: "center",
      },

      {
        field: "Rank",
        caption: t("Rank"),
        alignment: "center",
        // grouped: true,
      },
      {
        field: "CategoryName",
        caption: t("Category Name"),
        alignment: "center",
        grouped: true,
        isVisable: false,
      },
      {
        field: "IsActive",
        caption: t("Is Active"),
        alignment: "center",
        dataType: "boolean",
      },
    ];
  }, [t]);

  return (
    <>
      <div
        className="content"
        style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}
      >
        <MainProducts colAttributes={productsItemColAttributes} />
      </div>
    </>
  );
}

export default Products;
