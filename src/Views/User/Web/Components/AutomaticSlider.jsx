import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, CardHeader } from "reactstrap";

import { ApiBaseUrl } from "../../../../Service/config";
import AdminSection from "../../../../Components/AdminSection";
import { AUTOMATIC_SLIDERS } from "../api";
import ButtonComponent from "../../../../Components/ButtonComponent";
import WebForm from "../../../../Components/WebForm/WebForm";

function AutomaticSlider({ setloading }) {
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
        field: "link",
        caption: t("Link"),
        alignment: "left",
      },
    ];
  }, [t]);

  useEffect(() => {
    // get slider images
    setloading(true);
    AUTOMATIC_SLIDERS()
      .then((response) => setSliderImages(response))
      .finally(() => setloading(false));
  }, []);

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
    link: "",
    rank: 0,
  });
  const [values, setValues] = useState(defaultValues.current);
  console.log(values);
  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  return (
    <div className="content" style={{ padding: 20 }}>
      <AdminSection
        allowEdit="true"
        // Drag and Drop
        allowReordering={true}
        showDragIcons={true}
        onReorder={(e) => {
          onReorder(e);
          setEditing(false);
        }}
        data={sliderImages}
        component={WebForm}
        addInput={true}
        handleChange={handleChange}
        values={values}
        setValues={setValues}
        defaultValues={defaultValues.current}
        colAttributes={sliderImagesColAttributes}
        controller={ApiBaseUrl + "/api/automatic_slider"}
      />
      <div style={{ marginTop: 40 }}>
        <ButtonComponent disable={editing} title={"Submit"} />
      </div>
    </div>
  );
}

export default AutomaticSlider;
