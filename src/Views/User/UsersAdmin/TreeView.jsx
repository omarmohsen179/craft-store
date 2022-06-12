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
import ButtonComponent from "../../../Components/ButtonComponent";
import { RowDragging } from "devextreme-react/data-grid";

const expandedRowKeys = [1];

function TreeView({
  categoryData,
  productsData,
  allowAdding = true,
  allowReordering = false,
  allowUpdating = true,
  allowDeleting = true,
  onReorder,
  onDragChange,
}) {
  const [clicked, setClicked] = useState(false);

  function handleSubmit() {}

  return (
    <TreeList
      id="employees"
      dataSource={categoryData}
      rootValue={-1}
      defaultExpandedRowKeys={expandedRowKeys}
      showRowLines={true}
      showBorders={true}
      columnAutoWidth={true}
      keyExpr="ID"
      parentIdExpr="Head_ID"
    >
      <SearchPanel visible={true} />
      <RowDragging
        onDragChange={onDragChange}
        onReorder={onReorder}
        allowReordering={allowReordering}
        showDragIcons={true}
        allowDropInsideItem={true}
      />
      <Editing
        mode="row"
        allowAdding={allowAdding}
        allowUpdating={allowUpdating}
        allowDeleting={allowDeleting}
        useIcons
      />
      <Column dataField="Title" caption="Categories" />
      <Column type="buttons" width={120}>
        <Button name="add" />
        <Button name="edit" />
        <Button name="delete" />
        <Button
          hint="Clone"
          icon="edit"
          visible={true}
          disabled={false}
          onClick={() => setClicked(true)}
        />
      </Column>

      {clicked && (
        <Popup
          title="Select Products"
          visible={clicked}
          onHiding={() => setClicked(false)}
          width={"80%"}
        >
          <ListForm productsData={productsData} />
          <div
            style={{
              width: "95%",
              position: "absolute",
              left: "0",
              right: "0",
              bottom: "5%",
              margin: "0 auto",
            }}
          >
            <ButtonComponent
              onClick={handleSubmit}
              type="submit"
              title={"Submit"}
            />
          </div>
        </Popup>
      )}
    </TreeList>
  );
}

export default TreeView;
