import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, CardHeader } from "reactstrap";

import WebForm from "../../../../Components/WebForm/WebForm";

import { ApiBaseUrl } from "../../../../Service/config";

import { HOME_SLIDER } from "../api";

import AdminSection from "../../../../Components/AdminSection";
import ButtonComponent from "../../../../Components/ButtonComponent";

function HomeSlider() {
  const { t } = useTranslation();
  const [sliderImages, setSliderImages] = useState();
  const sliderImagesColAttributes = useMemo(() => {
    return [
      {
        field: "image_path",
        caption: t("Images"),
        alignment: "left",
        dataType: "Picture",
      },

      {
        field: "item_id",
        caption: t("item_id"),
        alignment: "left",
      },
    ];
  }, [t]);

  useEffect(() => {
    HOME_SLIDER().then((response) => {
      setSliderImages([...response]);
    });
  }, []);

  // Drag and Drop
  function onReorder(e) {
    const visibleRows = e.component.getVisibleRows();
    const sortedData = [...sliderImages];
    const toIndex = sortedData.indexOf(visibleRows[e.toIndex].data);
    const fromIndex = sortedData.indexOf(e.itemData);

    sortedData.splice(fromIndex, 1);
    sortedData.splice(toIndex, 0, e.itemData);

    setSliderImages(sortedData);
  }

  const [editing, setEditing] = useState(true);

  const defaultValues = useRef({
    image_path: "",
  });
  const [values, setValues] = useState(defaultValues.current);

  return (
    <>
      <div className="content" style={{ padding: 20 }}>
        <AdminSection
          allowEdit="false"
          // Drag and Drop
          allowReordering={true}
          showDragIcons={true}
          onReorder={(e) => {
            onReorder(e);
            setEditing(false);
          }}
          //////////////////
          data={sliderImages}
          component={WebForm}
          colAttributes={sliderImagesColAttributes}
          controller={ApiBaseUrl + "/api/home_slider"}
          //////////////////

          values={values}
          setValues={setValues}
        />
        <div style={{ marginTop: 40 }}>
          <ButtonComponent disable={editing} title={"Submit"} />
        </div>
      </div>
    </>
  );
}

export default HomeSlider;
