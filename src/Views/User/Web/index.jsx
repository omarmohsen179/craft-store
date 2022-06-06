import { Card, CardBody, CardHeader } from "reactstrap";
import { useTranslation } from "react-i18next";
import AdminSection from "../../../AdminSection";
import { useEffect, useMemo, useState } from "react";
import REQUEST from "../../../Service/Request";
import WebForm from "./WebForm";

import CrudTable from "../../../Components/CrudTable/CrudTable";

function Web() {
  const { t } = useTranslation();

  const [sliderImages, setSliderImages] = useState([
    {
      Picture:
        "https://images.unsplash.com/photo-1654385166034-84bc493f118f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      Rank: 2,
    },
    {
      Picture:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/Banners-Home/_-_-1.png",
      Rank: 1,
    },
    {
      Picture:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/Banners-Home/Addrus-banner-for-ptech-website.PNG",
      Rank: 3,
    },
  ]);

  const sliderImagesColAttributes = useMemo(() => {
    return [
      {
        field: "Picture",
        caption: t("Images"),
        alignment: "left",
        dataType: "Picture",
      },
    ];
  }, [t]);

  useEffect(() => {
    // get slider images
    let config = {
      method: "GET",
      url: `${"ApiBaseUrl"}/api/category`,
    };

    REQUEST(config).then((response) => {
      let sliderImages = response;
      sliderImages([...sliderImages]);
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
            controller={"ApiBaseUrl" + "/api/category"}
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
