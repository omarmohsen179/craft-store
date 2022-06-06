import React, { memo, useRef } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";

import { useTranslation } from "react-i18next";

const UploadImageButton = ({
  isMultiple,
  handleGetImages,
  handleRemoveImage,
  handleRemoveAllImages,
  imagesFiles,
  required = false,
}) => {
  const { t, i18n } = useTranslation();
  const fileInput = useRef();

  return (
    <div className="col-12 ">
      <div
        className="inputField"
        style={{
          direction: i18n.language === "en" ? "ltr" : "rtl",
        }}
      >
        <input
          ref={fileInput}
          accept="image/*"
          type={"file"}
          required={required}
          className={"d-none"}
          onClick={(event) => {
            const element = event.target;
            element.value = "";
          }}
          onChange={(event) => handleGetImages(event)}
          multiple={isMultiple}
        />

        <div className="w-100 d-flex align-items-center  ">
          <button
            className="btn uploadButton"
            type="button"
            onClick={() => fileInput.current.click()}
          >
            {t("Upload Image")} <BiImageAdd style={{ fontSize: "20px" }} />
          </button>

          {imagesFiles.length > 0 ? (
            <span className="clearAllOption" onClick={handleRemoveAllImages}>
              {isMultiple ? t("Clear All?") : ""}
            </span>
          ) : (
            ""
          )}
        </div>

        {imagesFiles.length > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
              minHeight: "100px",
              marginTop: "15px",
              gap: "20px",
              flexWrap: "wrap",
              position: "relative",
            }}
          >
            {imagesFiles.map((element, index) => {
              return (
                <div
                  key={index}
                  style={{
                    width: "100px",
                    height: "100px",
                    position: "relative",
                  }}
                >
                  <AiFillCloseCircle
                    style={{
                      position: "absolute",
                      top: "5%",
                      right: "3%",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      //if(imagesFiles.length>0){
                      handleRemoveImage && handleRemoveImage(element);

                      //}
                    }}
                  />

                  <img
                    alt={"img"}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    src={
                      typeof element == "string"
                        ? element
                        : URL.createObjectURL(element)
                    }
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(UploadImageButton);
