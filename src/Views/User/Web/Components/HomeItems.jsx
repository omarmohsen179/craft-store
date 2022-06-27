import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "shards-react";
import ButtonComponent from "../../../../Components/ButtonComponent";
import LoadingAnimation from "../../../../Components/LoadingAnimation/LoadingAnimation";
import MasterTable from "../../../../Components/MasterTable/MasterTable";

import { HOME_ITEMS } from "../api";

function HomeItems() {
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    HOME_ITEMS().then((res) => setDataSource(res.data));
  }, []);
  function cellRender(data) {
    return null;
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
  const [alreadySelectedItems, setAlreadySelectedItems] = useState([]);

  return (
    <div className="content" style={{ padding: 20 }}>
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
    </div>
  );
}

export default HomeItems;
