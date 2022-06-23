import React, { Children, useCallback, useEffect, useState } from "react";

import DataGrid, {
  Column,
  Editing,
  Paging,
  Lookup,
  Form,
  Item,
  Button,
  Pager,
} from "devextreme-react/data-grid";
import "devextreme-react/text-area";
// import { Button } from "devextreme-react";

import { Popup } from "devextreme-react/popup";
import ButtonComponent from "../ButtonComponent";
// import { employees, states } from "./data.js";

function CrudTable({
  data = [],
  setData,
  colAttributes = [],
  FormComponent,
  onRowRemoving,
  allowEdit = false,
  handleCellColor,
  allowDelete,
}) {
  const [clicked, setClicked] = useState(false);
  const [dataRow, setDataRow] = useState(null);

  const handleChange = useCallback((e) => {
    setDataRow(e.row.data.roles);
    setClicked(true);
  }, []);

  function handleDelete(e) {
    setData(data.filter((item) => item.ID !== e.data.ID));
  }

  //////////// Close popup on submit ////////////
  useEffect(() => {
    setClicked(false);
  }, [data]);

  function cellRender(data) {
    return (
      <img
        src={data.value}
        style={{ width: "300px", height: "150px" }}
        alt=""
      />
    );
  }

  return (
    <div style={{ padding: 30 }} id="data-grid-demo">
      <DataGrid
        onRowRemoved={handleDelete}
        onRowRemoving={onRowRemoving}
        id="id"
        dataSource={data}
        showBorders={true}
        rowAlternationEnabled
        showRowLines
        onCellPrepared={(e) => handleCellColor(e)}
      >
        <Paging defaultPageSize={10} pageSize={10} />
        <Pager showNavigationButtons={true} displayMode />

        <Editing mode="cell" useIcons={true} allowDeleting allowAdding />

        {clicked && (
          <Popup visible={clicked} onHiding={() => setClicked(false)}>
            <FormComponent
              setData={setData}
              rowData={dataRow}
              dataSource={data}
              columns={colAttributes}
            />
          </Popup>
        )}

        {colAttributes.map((el, index) => (
          <Column
            key={index}
            dataType={el.dataType || "string"}
            dataField={el.field}
            caption={el.caption}
            cellRender={el.dataType === "Picture" ? cellRender : undefined}
            width={el.width}
            type={el.type}
            alignment={el.alignment}
            cellComponent={el.comp}
          >
            {/* {el.type === "buttons" && (
              <Button
                hint="Clone"
                icon="bulletlist"
                visible={true}
                disabled={false}
                onClick={(e) => handleChange(e.row.data.roles)}
              />
            )} */}
          </Column>
        ))}
        <Column type="buttons" width={110}>
          {allowEdit && (
            <Button
              hint="Clone"
              icon="edit"
              visible={true}
              disabled={false}
              onClick={(e) => handleChange(e)}
            />
          )}
          {allowDelete && <Button name="delete" />}
        </Column>
      </DataGrid>
    </div>
  );
}

export default CrudTable;
