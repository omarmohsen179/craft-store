import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Col, FormGroup, Input, Row } from "reactstrap";
import UploadImageButton from "../../../Components/UploadImageButton/UploadImageButton";
import { ApiBaseUrl } from "../../../Service/config";

const CategoryForm = ({ onSubmit, onCancel, data }) => {
  const { t } = useTranslation();
  const [imageValue, setImageValue] = useState({
    images: "",
  });

  const [images, setImages] = useState(imageValue);

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
    onSubmit(images);
  }, [images, onSubmit]);

  let handleGetImages = (event) => {
    let files = event.target.files;
    setImages({ ...images, images: files[0] });
  };

  let handleRemoveImage = useCallback(() => {
    setImages((prev) => ({
      ...prev,
      images: "",
    }));
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
              images.images
                ? [
                    typeof images.images == "string"
                      ? ApiBaseUrl + images.images
                      : images.images,
                  ]
                : []
            }
          />
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
                    ? ApiBaseUrl + category.images
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
