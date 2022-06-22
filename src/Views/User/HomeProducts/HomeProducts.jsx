import { Button } from "bootstrap";
import { Column } from "devextreme-react/data-grid";
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "shards-react";
import ButtonComponent from "../../../Components/ButtonComponent";
import LoadingAnimation from "../../../Components/LoadingAnimation/LoadingAnimation";
import MasterTable from "../../../Components/MasterTable/MasterTable";
import UploadImageButton from "../../../Components/UploadImageButton/UploadImageButton";
import { ITEMS } from "../UsersAdmin/Api";
import TableSlider from "../UsersAdmin/components/TableSlider";

function HomeProducts() {
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    // Get items
    ITEMS().then((res) => setDataSource(res.data));
  }, []);
  function cellRender(data) {
    return <TableSlider />;
  }

  const colAttributes = [
    {
      field: "item_name",
      caption: "Name",
      // alignment: "center",
    },
    {
      field: "e_name",
      caption: "Name (EN)",
      // alignment: "center",
    },

    {
      field: "image",
      caption: "Images",
      cellRender: cellRender,
      width: 400,
      alignment: "center",
    },
  ];

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItemsFinal, setSelectedItemsFinal] = useState([]);
  const [alreadySelectedItems, setAlreadySelectedItems] = useState([]);

  console.log(selectedItems);
  console.log(selectedItemsFinal);
  console.log(alreadySelectedItems);
  return (
    <div className="content" style={{ padding: 20 }}>
      <Card className="card-user">
        <CardHeader>
          <h4>{"Home Products"}</h4>
        </CardHeader>
        <CardBody>
          {dataSource ? (
            <>
              <MasterTable
                dataSource={dataSource}
                colAttributes={colAttributes}
                height={"65vh"}
                columnChooser={false}
                showCheckBoxesMode={"always"}
                onSelectionChanged={(e) => setSelectedItems(e.selectedRowsData)}
                // onSelectionChanged={(e) => console.log(e)}
                keyExpr="id"
                selectedRowKeys={alreadySelectedItems}
              ></MasterTable>
              <div style={{ marginTop: 20 }}>
                <ButtonComponent
                  //   onClick={handleSubmit}
                  type="submit"
                  title={"Submit"}
                />
              </div>
            </>
          ) : (
            <LoadingAnimation />
          )}
        </CardBody>
      </Card>
    </div>
  );
}

export default HomeProducts;
