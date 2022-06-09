import { Card, CardBody, CardHeader } from "reactstrap";
import { useTranslation } from "react-i18next";
import AdminSection from "../../../AdminSection";
import { useEffect, useMemo, useState } from "react";
import REQUEST from "../../../Service/Request";
import WebForm from "./WebForm";

import CrudTable from "../../../Components/CrudTable/CrudTable";
import { ApiBaseUrl } from "../../../Service/config";

function Web() {
  const { t } = useTranslation();

  const [sliderImages, setSliderImages] = useState([]);

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

  return (
    <div className="content" style={{ padding: 20 }}>
      <Card className="card-user">
        <CardHeader>
          <h4>{t("Slider Images")}</h4>
        </CardHeader>
        <CardBody>
          <AdminSection
            allowEdit="false"
            data={sliderImages}
            component={WebForm}
            colAttributes={sliderImagesColAttributes}
            controller={ApiBaseUrl + "/api/home_slider"}
          />

          {/* <CrudTable
            data={sliderImages}
            setData={setSliderImages}
            // onRowRemoving={(event) => (event.cancel = true)}
            colAttributes={sliderImagesColAttributes}
            FormComponent={WebForm}
          /> */}

          {/* <ControlsTable
            dataSource={sliderImages}
            colAttributes={sliderImagesColAttributes}
          /> */}

          {/* <DataGrid
            id="gridContainer"
            dataSource={sliderImages}
            // keyExpr="ID"
            showBorders={true}
          >
            <Column
              dataField="Picture"
              width={"100%"}
              allowSorting={false}
              cellRender={cellRender}
            />
          </DataGrid> */}
        </CardBody>
      </Card>
    </div>
  );
}

export default Web;
