import React, { useCallback, useEffect, useRef, useState } from "react";

import UploadImageButton from "../../../../../Components/UploadImageButton/UploadImageButton";
import { ApiBaseUrl } from "../../../../../Service/config";

function ItemImages({ images = [], HandleChange }) {
  let handleGetImages = (event) => {
    let files = event.target.files;
    console.log([...images, ...files]);
    HandleChange([...images, ...files], "images");
  };

  let handleRemoveImage = (element) => {
    HandleChange(
      images.filter((ele) => ele !== element),
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
          ele instanceof String ? ele + ApiBaseUrl : ele
        )}
      />
    </div>
  );
}

export default ItemImages;
