import React, { useCallback, useState } from "react";

import TreeList, {
  RemoteOperations,
  Column,
  SearchPanel,
  HeaderFilter,
  Editing,
  RequiredRule,
  Lookup,
  Button,
} from "devextreme-react/tree-list";
import { Popup } from "devextreme-react/popup";
import ListForm from "./ListForm";

const expandedRowKeys = [1];

function TreeView({ data, FormComponent }) {
  const [clicked, setClicked] = useState(false);
  const [dataRow, setDataRow] = useState(null);

  const handleChange = useCallback((e) => {
    setDataRow(e.row.data);
    setClicked(true);
  }, []);
  return (
    <TreeList
      id="employees"
      dataSource={data}
      rootValue={-1}
      defaultExpandedRowKeys={expandedRowKeys}
      showRowLines={true}
      showBorders={true}
      columnAutoWidth={true}
      keyExpr="ID"
      parentIdExpr="Head_ID"
    >
      <Editing
        mode="row"
        allowAdding={true}
        allowUpdating={true}
        allowDeleting={true}
        useIcons
      />
      <Column dataField="Title" caption="Categories" />
      <Column type="buttons" width={110}>
        <Button name="add" />
        <Button name="edit" />
        <Button name="delete" />
        <Button
          hint="Clone"
          icon="edit"
          visible={true}
          disabled={false}
          onClick={(e) => handleChange(e)}
        />
      </Column>

      {clicked && (
        <Popup
          title="Select Products"
          visible={clicked}
          onHiding={() => setClicked(false)}
        >
          <ListForm />
        </Popup>
      )}
    </TreeList>
  );
}

export default TreeView;
