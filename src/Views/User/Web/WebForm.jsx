import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { Button, Col, FormGroup, Input, Row } from "reactstrap";
import SquaredInput from "../../../Components/SquaredInput";
import UploadImageButton from "../../../Components/UploadImageButton/UploadImageButton";
import { ApiBaseUrl } from "../../../Service/config";

const CategoryForm = ({
  onSubmit,
  onCancel,
  setvalues,
  addInput,
  values,
  itemToUpdate,
}) => {
  const { t } = useTranslation();

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
  //       if (category[key] !== imageValue[key]) {
  //         result = false;
  //       }
  //     }
  //     return result;
  //   }
  // }, [category, imageValue]);

  // submit form

  const addHandle = useCallback(() => {
    console.log("itemToUpdate", itemToUpdate);
    onSubmit(values);
  }, [onSubmit, values, itemToUpdate]);

  let handleGetImages = (event) => {
    let files = event.target.files;
    setvalues((prev) => ({ ...prev, image_path: files[0] }));
  };
  let handleRemoveImage = useCallback(() => {
    setvalues((prev) => ({
      ...prev,
      image_path: "",
    }));
  }, []);

  const handleChange = useCallback((e) => {
    setvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  return (
    <>
      <div className="mt-2">
        <FormGroup>
          <label>{t("Upload Images")}</label>

          <UploadImageButton
            isMultiple={false}
            handleGetImages={handleGetImages}
            handleRemoveImage={handleRemoveImage}
            imagesFiles={
              values.image_path
                ? [
                    typeof values.image_path == "string"
                      ? ApiBaseUrl + values.image_path
                      : values.image_path,
                  ]
                : []
            }
          />
          {addInput && (
            <>
              <label style={{ marginTop: 10 }}>{t("Add Link")}</label>
              <SquaredInput
                // label={"Add Link"}
                handleChange={handleChange}
                name="link"
                value={values["link"]}
                // required
              />
            </>
          )}
        </FormGroup>
        {/* 
        <FormGroup>
          <label>{t("Rank")}</label>
        <UploadImageButton
          isMultiple={false}
          handleGetImages={handleGetImages}
          handleRemoveImage={handleRemoveImage}
          imagesFiles={
            images.images
              ? [
                  typeof images.images == "string"
                    ? ApiBaseUrl1 + category.images
                    : category.images,
                ]
              : []
          }
        /> */}
        {/* </FormGroup> */}

        <div className="button-container">
          <Row>
            <Col style={{ width: "170px" }}>
              <Button
                className="btn btn btn-success col-12"
                // disabled={isNotValid}
                onClick={addHandle}
              >
                {t("Add")}
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
