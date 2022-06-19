import { Card, CardBody, CardHeader } from "reactstrap";
import { useTranslation } from "react-i18next";
import AdminSection from "../../../AdminSection";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import REQUEST from "../../../Service/Request";
import WebForm from "./WebForm";

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
import AutomaticSlider from "../AutomaticSlider/AutomaticSlider";

function Web() {
  const { t } = useTranslation();

  const [sliderImages, setSliderImages] = useState();
  console.log(sliderImages);

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
    // get slider images
    let config = {
      method: "GET",
      url: `${ApiBaseUrl}/api/home_slider`,
    };

    REQUEST(config).then((response) => {
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
    link: "",
  });
  const [values, setValues] = useState(defaultValues.current);
  console.log(values);
  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  return (
    <>
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
              colAttributes={sliderImagesColAttributes}
              controller={ApiBaseUrl + "/api/home_slider"}
              //////////////////
              handleChange={handleChange}
              values={values}
              setValues={setValues}
            />
            <div style={{ marginTop: 40 }}>
              <ButtonComponent disable={editing} title={"Submit"} />
            </div>
          </CardBody>
        </Card>
      </div>
      <AutomaticSlider />
    </>
  );
}

export default Web;
