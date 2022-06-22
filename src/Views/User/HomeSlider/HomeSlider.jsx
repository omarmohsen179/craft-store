import { Card, CardBody, CardHeader } from "reactstrap";
import { useTranslation } from "react-i18next";
import AdminSection from "../../../AdminSection";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import REQUEST from "../../../Service/Request";
import WebForm from "../Web/WebForm";

import CrudTable from "../../../Components/CrudTable/CrudTable";
import { ApiBaseUrl } from "../../../Service/config";
import DataGrid, {
  Column,
  RowDragging,
  Scrolling,
  Lookup,
  Sorting,
} from "devextreme-react/data-grid";
import ButtonComponent from "../../../Components/ButtonComponent";

function HomeSlider() {
  const { t } = useTranslation();

  const [sliderImages, setSliderImages] = useState([]);
  //   console.log(sliderImages);
  useEffect(() => {
    // get slider images
    let config = {
      method: "GET",
      url: `${ApiBaseUrl}/api/automatic_slider`,
    };

    REQUEST(config).then((response) => {
      setSliderImages([...response]);
    });
  }, []);
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
      <Card className="card-user">
        <CardHeader>
          <h4>{t("Home Slider Images")}</h4>
        </CardHeader>
        <CardBody>
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
            addInput={true}
            // link={values["Link"]}
            handleChange={handleChange}
            values={values}
            setvalues={setValues}
            ///////////////////
            colAttributes={sliderImagesColAttributes}
            controller={ApiBaseUrl + "/api/automatic_slider"}
          />
          <div style={{ marginTop: 40 }}>
            <ButtonComponent disable={editing} title={"Submit"} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default HomeSlider;
