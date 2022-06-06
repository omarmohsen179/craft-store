import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Col, FormGroup, Input, Row } from "reactstrap";
import InputTwoLanguages from "../../../../Components/InputTwoLanguages/InputTwoLanguages";
import UploadImageButton from "../../../../Components/UploadImageButton/UploadImageButton";
import { ApiBaseUrl } from "../../../../Service/config";

const CategoryForm = ({ onSubmit, onCancel, data }) => {
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

  const [status, setStatus] = useState("UPDATE");

  const [category, setCategory] = useState(categoryInitValues);

  useEffect(() => {
    if (data) {
      setStatus("UPDATE");
      setCategory({ ...data });
      setCategoryInitValues({ ...data });
    } else {
      setStatus("ADD");
    }
  }, [data]);
  const updateCategory = useCallback((value, id) => {
    setCategory((prev) => ({ ...prev, [id]: value }));
  }, []);

  // const isNotValid = useMemo(() => {
  //   let keysToCheck = ["Title"];
  //   for (let key of keysToCheck) {
  //     if (!category[key] || !category[key].toString()) {
  //       return true;
  //     }
  //   }

  //   if (category.Id) {
  //     let result = true;
  //     for (let key of Object.keys(category)) {
  //       if (category[key] !== categoryInitValues[key]) {
  //         result = false;
  //       }
  //     }
  //     return result;
  //   }
  // }, [category, categoryInitValues]);

  // submit form
  const addHandle = useCallback(() => {
    onSubmit(category);
  }, [category, onSubmit]);
  let handleGetImages = (event) => {
    let files = event.target.files;
    setCategory({ ...category, image: files[0] });
  };

  let handleRemoveImage = useCallback(() => {
    setCategory((prev) => ({
      ...prev,
      image: "",
    }));
  }, []);
  return (
    <>
      <div className="mt-2">
        <InputTwoLanguages
          id="name"
          label="Title"
          onValueChange={updateCategory}
          value={category.name}
          valueEn={category.name_en}
        />
        <InputTwoLanguages
          id="describe"
          label="Description"
          onValueChange={updateCategory}
          value={category.describe}
          valueEn={category.describe_en}
        />
        <FormGroup>
          <label>{t("Rank")}</label>

          <Input
            id={"Rank"}
            value={category.Rank}
            onChange={(e) => updateCategory(e.target.value, e.target.id)}
            type="number"
            min="0"
          />
        </FormGroup>
        <FormGroup>
          <label>{t("Rank")}</label>

          <UploadImageButton
            isMultiple={false}
            handleGetImages={handleGetImages}
            handleRemoveImage={handleRemoveImage}
            imagesFiles={
              category.image
                ? [
                    typeof category.image == "string"
                      ? ApiBaseUrl + category.image
                      : category.image,
                  ]
                : []
            }
          />
        </FormGroup>

        <div className="button-container">
          <Row>
            <Col style={{ width: "170px" }}>
              <Button
                className="btn btn btn-success col-12"
                // disabled={isNotValid}
                onClick={addHandle}
              >
                {status === "update" ? t("Update") : t("Add")}
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

export default CategoryForm;
