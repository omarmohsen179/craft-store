import { Card, CardBody, CardHeader } from "reactstrap";
import { useTranslation } from "react-i18next";
import AdminSection from "../../../AdminSection";
import { useEffect, useMemo, useState } from "react";
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

  return (
    <div className="content" style={{ padding: 20 }}>
      <Card className="card-user">
        <CardHeader>
          <h4>{t("Slider Images")}</h4>
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
          />
          <div style={{ marginTop: 40 }}>
            <ButtonComponent loading={editing} title={"Submit"} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Web;
