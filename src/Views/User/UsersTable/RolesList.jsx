import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import ButtonComponent from "../../../Components/ButtonComponent";
import LoadingAnimation from "../../../Components/LoadingAnimation/LoadingAnimation";
import MasterTable from "../../../Components/MasterTable/MasterTable";

function RolesList({ dataSource, colAttributes }) {
  return (
    <>
      {dataSource ? (
        <>
          <MasterTable
            dataSource={dataSource}
            colAttributes={colAttributes}
            height={"60vh"}
            columnChooser={false}
            showCheckBoxesMode={"always"}
            // onSelectionChanged={(e) => setSelectedItems(e.selectedRowsData)}
            // onSelectionChanged={(e) => console.log(e)}
            keyExpr="id"
            // selectedRowKeys={alreadySelectedItems}
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
    </>
  );
}

export default RolesList;
