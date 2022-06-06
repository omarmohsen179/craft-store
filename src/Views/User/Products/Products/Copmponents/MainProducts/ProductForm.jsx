import React, { useCallback, useEffect, useRef, useState } from "react";
import ButtonComponent from "../../../../../../Components/ButtonComponent";
import InputTwoLanguages from "../../../../../../Components/InputTwoLanguages/InputTwoLanguages";
import SquaredInput from "../../../../../../Components/SquaredInput";
import UploadImageButton from "../../../../../../Components/UploadImageButton/UploadImageButton";
import { PRODUCT_ID } from "../../api";
import "./ProductForm.css";

function ProductForm({ value, isClicked, hide, setHide }) {
  const tabs = useRef([
    { id: "one-tab", href: "#one", label: "Basic Info" },
    { id: "two-tab", href: "#two", label: "Header" },
    { id: "three-tab", href: "#three", label: "Pricing" },
  ]);
  const defualtValues = useRef({
    Id: 0,
    Title: "",
    TitleEn: "",
    Description: " ",
    DescriptionEn: " ",
    ProductsCount: 0,
    Rank: 0,
    CategoryId: 0,
    Zip: "",
    Link: "",
    Category: "",
  });
  const defualtValuesLang = useRef({
    ProductName: "",
    ProductNameEn: "",
    SubTitle: "",
    SubTitleEn: "",
    Title: "",
    TitleEn: "",
    HeaderTip: "",
    HeaderTipEn: "",
    HeaderDescription: "",
    HeaderDescriptionEn: "",
  });
  const [values, setValues] = useState(defualtValues.current);
  const [valuesLang, setValuesLang] = useState(defualtValuesLang.current);
  // useEffect(() => {
  //   setValues(value === 0 && defualtValues.current);
  //   value === 0 &&
  //     PRODUCT_ID()
  //       .then((res) => setValues(res))
  //       .catch(() => {});
  // }, [value]);
  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleChangeLang = useCallback((value, id) => {
    setValuesLang((prev) => ({ ...prev, [id]: value }));
  }, []);

  console.log(values);
  console.log(valuesLang);

  const defualtParagraphSectionInterface = {
    id: 0,
    title: "",
    titleEn: "",
    description: "",
    descriptionEn: "",
    imagePath: "",
    image: "",
  };

  let [Head, setHead] = useState(defualtParagraphSectionInterface);

  let handleGetImages = (event) => {
    let files = event.target.files;
    setHead({ ...Head, image: files[0] });
  };

  let handleRemoveImage = useCallback(() => {
    setHead((prev) => ({
      ...prev,
      image: "",
    }));
  }, []);

  return (
    <div className={!hide ? "add-product-form" : "hidden"}>
      <div class="row">
        <div
          class="col-5"
          style={{ backgroundColor: "transparent", width: "100%" }}
        >
          <div class="card mt-3 tab-card">
            <div class="card-header tab-card-header">
              <ul
                class="nav nav-tabs card-header-tabs"
                id="myTab"
                role="tablist"
              >
                {tabs.current.map((ele, index) => (
                  <li className={"nav-item "}>
                    <a
                      class={"nav-link " + (index === 0 ? "active show" : "")}
                      id={ele.id}
                      data-toggle="tab"
                      href={ele.href}
                      role="tab"
                      aria-controls="One"
                      aria-selected="true"
                    >
                      {ele.label}
                    </a>
                  </li>
                ))}
                <button
                  className="product-form-btn"
                  onClick={() => setHide(true)}
                >
                  <i className=" fas fa-x"></i>
                </button>
              </ul>
            </div>

            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active p-3"
                id="one"
                role="tabpanel"
                aria-labelledby="one-tab"
              >
                <InputTwoLanguages
                  id="ProductName"
                  label="Product Name"
                  value={valuesLang?.ProductName}
                  valueEn={valuesLang?.ProductNameEn}
                  onValueChange={handleChangeLang}
                />

                <SquaredInput
                  label={"Category"}
                  handleChange={handleChange}
                  name="Category"
                  value={values["Category"]}
                  required
                  // errorMessage={error.FullName}
                  // onBlur={CheckInputs(values, error)}
                />
                <SquaredInput
                  label={"Demo Link"}
                  handleChange={handleChange}
                  name="Link"
                  value={values["Link"]}
                  required
                  // errorMessage={error.FullName}
                  // onBlur={CheckInputs(values, error)}
                />

                {/* <UploadImageButton
                  isMultiple={true}
                  handleGetImages={handleGetImages}
                  handleRemoveImage={handleRemoveImage}
                  handleRemoveAllImages={handleRemoveAllImages}
                  imagesFiles={
                    Head.image
                      ? [
                          typeof Head.image == "string"
                            ? apiEndPoint + Head.image
                            : Head.image,
                        ]
                      : []
                  }
                /> */}
              </div>
              <div
                class="tab-pane fade p-3"
                id="two"
                role="tabpanel"
                aria-labelledby="two-tab"
              >
                <InputTwoLanguages
                  id="HeaderDescription"
                  label="Header Description"
                  value={valuesLang?.HeaderDescription}
                  valueEn={valuesLang?.HeaderDescriptionEn}
                  onValueChange={handleChangeLang}
                />
                <InputTwoLanguages
                  id="HeaderTip"
                  label="Header Tip"
                  value={valuesLang?.HeaderTip}
                  valueEn={valuesLang?.HeaderTipEn}
                  onValueChange={handleChangeLang}
                />
              </div>
              <div
                class="tab-pane fade p-3"
                id="three"
                role="tabpanel"
                aria-labelledby="three-tab"
              >
                <InputTwoLanguages
                  id="Title"
                  label="Title"
                  value={valuesLang?.Title}
                  valueEn={valuesLang?.TitleEn}
                  onValueChange={handleChangeLang}
                />
                <InputTwoLanguages
                  id="SubTitle"
                  label="Sub Title"
                  value={valuesLang?.SubTitle}
                  valueEn={valuesLang?.SubTitleEn}
                  onValueChange={handleChangeLang}
                />
                <ButtonComponent title="Submit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
