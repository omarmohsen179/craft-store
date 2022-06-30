import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../../../Components/ButtonComponent";
import { ITEM_ID, SUBMIT_ITEM } from "./api";
import BasicInfo from "./component/BasicInfo";
import Description from "./component/Description";
import ItemImages from "./component/ItemImages";
import "./ProductForm.css";

function ProductForm({ intial_data, setloading, hide, setHide }) {
  const tabs = useRef([
    { id: "one-tab", href: "#one", label: "Basic Info" },
    { id: "two-tab", href: "#two", label: "Description" },
    { id: "three-tab", href: "#three", label: "Images" },
  ]);

  const defualtValues = useRef({
    id: 0,
    name: "",
    name_en: "",
    category: "",
    images: [],
    description_en: "",
    description: "",
    short_description: "",
    short_description_en: "",
  });
  const { t, i18n } = useTranslation();
  const [values, setValues] = useState(defualtValues.current);
  useEffect(() => {
    setloading(true);
    ITEM_ID(intial_data.id)
      .then((res) => {
        setValues({ ...res, ...intial_data });
        setloading(false);
      })
      .catch(() => {});
  }, [intial_data.id]);
  const handleChange_input = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);
  const HandleChange = useCallback((value, id) => {
    setValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  }, []);
  const Submit = () => {
    let formData = new FormData();
    var image_array = [];
    for (var i = 0; i < values.images.length; i++) {
      if (!values.images[i].image_path) {
        formData.append("image_path", values.images[i]);
      } else {
        image_array.push(values.images[i]);
      }
    }
    formData.append("data", JSON.stringify({ ...values, images: image_array }));
    setloading(true);
    SUBMIT_ITEM(formData)
      .then((res) => {
        setValues(res);
        alert(t("Saved Successfully"));
      })
      .catch((error) => alert(t(error.detail)))
      .finally(() => setloading(false));
  };
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
                  <li className={"nav-item"}>
                    <a
                      className={"nav-link "}
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

            <div class="tab-content">
              <div
                class="tab-pane fade show active p-3"
                id="one"
                role="tabpanel"
                aria-labelledby="one-tab"
              >
                <BasicInfo values={values} HandleChange={handleChange_input} />
              </div>
              <div
                class="tab-pane fade p-3"
                id="two"
                role="tabpanel"
                aria-labelledby="two-tab"
              >
                <Description values={values} HandleChange={HandleChange} />
              </div>
              <div
                class="tab-pane fade p-3"
                id="three"
                role="tabpanel"
                aria-labelledby="three-tab"
              >
                <ItemImages
                  images={values.images}
                  HandleChange={HandleChange}
                />
              </div>
            </div>
            <div style={{ padding: "20px" }}>
              <ButtonComponent title="Submit" onClick={Submit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
