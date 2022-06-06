import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Col, FormGroup, Input, Row } from "reactstrap";
import InputTwoLanguages from "../../../../Components/InputTwoLanguages/InputTwoLanguages";

const CategoryFormSupperAdmin = ({ onSubmit, onCancel, data }) => {
  const { t } = useTranslation();
  const [categoryInitValues, setCategoryInitValues] = useState({
    Id: 0,
    Title: "",
    TitleEn: "",
    Description: " ",
    DescriptionEn: " ",
    ProductsCount: 0,
    Rank: 0,
    CategoryId: 0,
  });

  const [status, setStatus] = useState("IDLE");

  const [category, setCategory] = useState(categoryInitValues);

  useEffect(() => {
    if (data) {
      setStatus("UPDATE");
      setCategory({ ...data, Id: data.CategoryId });
      setCategoryInitValues({ ...data, Id: data.CategoryId });
    } else {
      setStatus("ADD");
    }
  }, [data]);
  const updateCategory = useCallback((value, id) => {
    setCategory((prev) => ({ ...prev, [id]: value }));
  }, []);

  const isNotValid = useMemo(() => {
    let keysToCheck = ["TitleEn"];
    for (let key of keysToCheck) {
      if (!category[key] || !category[key].toString()) {
        return true;
      }
    }

    if (category.Id) {
      let result = true;
      for (let key of Object.keys(category)) {
        if (category[key] !== categoryInitValues[key]) {
          result = false;
        }
      }
      return result;
    }
  }, [category, categoryInitValues]);

  // submit form
  const addHandle = useCallback(() => {
    onSubmit(category);
  }, [category, onSubmit]);

  return (
    <>
      <div className="mt-2">
        <InputTwoLanguages
          id="Title"
          label="Title"
          DisabledAnotherLangue
          onValueChange={updateCategory}
          value={category.Title}
          valueEn={category.TitleEn}
        />
        <InputTwoLanguages
          id="Description"
          label="Description"
          DisabledAnotherLangue
          onValueChange={updateCategory}
          value={category.Description}
          valueEn={category.DescriptionEn}
        />
        <div className="button-container">
          <Row>
            <Col style={{ width: "170px" }}>
              <Button
                className="btn btn btn-success col-12"
                disabled={isNotValid}
                onClick={addHandle}
              >
                {status === "UPDATE" ? t("Update") : t("Add")}
              </Button>
            </Col>
            <Col style={{ width: "170px" }}>
              <Button
                className=" btn btn-danger col-12"
                disabled={false}
                onClick={onCancel}
              >
                {t("Cancel")}
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default CategoryFormSupperAdmin;
