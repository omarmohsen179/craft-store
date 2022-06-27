import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button, Col, FormGroup, Row } from "reactstrap";
import SquaredInput from "../SquaredInput";
import UploadImageButton from "../UploadImageButton/UploadImageButton";
import { ApiBaseUrl } from "../../Service/config";

const WebForm = ({
  onSubmit,
  onCancel,
  setValues,
  addInput,
  values,
  itemToUpdate,
}) => {
  const { t } = useTranslation();

  const addHandle = useCallback(() => {
    onSubmit(values);
  }, [onSubmit, values, itemToUpdate]);

  let handleGetImages = (event) => {
    let files = event.target.files;
    setValues((prev) => ({ ...prev, image_path: files[0] }));
  };
  let handleRemoveImage = useCallback(() => {
    setValues((prev) => ({
      ...prev,
      image_path: "",
    }));
  }, []);

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
              values && values.image_path
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

export default WebForm;
