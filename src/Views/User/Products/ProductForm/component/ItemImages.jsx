import React, { useCallback, useEffect, useRef, useState } from "react";

import UploadImageButton from "../../../../../Components/UploadImageButton/UploadImageButton";
import { ApiBaseUrl } from "../../../../../Service/config";

function ItemImages({ images = [], HandleChange }) {
  let handleGetImages = (event) => {
    let files = event.target.files;
    HandleChange([...images, ...files], "images");
  };

  let handleRemoveImage = (element) => {
    HandleChange(
      images.filter(
        (ele) => ele !== element && ApiBaseUrl + ele?.image_path !== element
      ),
      "images"
    );
  };

  let handleRemoveAllImages = () => {
    HandleChange([], "images");
  };
  return (
    <div>
      <UploadImageButton
        isMultiple={true}
        handleGetImages={handleGetImages}
        handleRemoveImage={handleRemoveImage}
        handleRemoveAllImages={handleRemoveAllImages}
        imagesFiles={images.map((ele) =>
          ele.image_path || ele?.image_path?.length > -1
            ? ApiBaseUrl + ele.image_path
            : ele
        )}
      />
    </div>
  );
}

export default ItemImages;
