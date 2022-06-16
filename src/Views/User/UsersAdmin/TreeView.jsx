import React, { useCallback, useEffect, useState } from "react";

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
import { request } from "../../../Service/CallAPI";
import { ApiBaseUrl } from "../../../Service/config";
import REQUEST from "../../../Service/Request";
import { selectedItems } from "./Api";
import UploadImageButton from "../../../Components/UploadImageButton/UploadImageButton";
import "./style.css";

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
  // handleSave,
  ColAttributes = [],
  onRowInserting,
  handleDelete,
  handleEdit,
}) {
  const [clicked, setClicked] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [selectedItemsFinal, setSelectedItemsFinal] = useState([]);
  const [alreadySelectedItems, setAlreadySelectedItems] = useState([]);
  console.log(alreadySelectedItems);

  function handleSubmit() {
    selectedItems(categoryId, selectedItemsFinal).then((res) =>
      console.log(res)
    );
  }

  const [images, setimages] = useState([]);
  let handleGetImages = (event) => {
    let files = event.target.files;
    setimages((prevState) => {
      return [...prevState, ...files];
    });
  };

  let handleRemoveImage = (element) => {
    setimages((prevState) => prevState.filter((ele) => ele !== element));
  };

  let handleRemoveAllImages = () => {
    setimages([]);
  };

  return (
    <TreeList
      dataSource={categoryData}
      rootValue={-1}
      defaultExpandedRowKeys={expandedRowKeys}
      showRowLines={true}
      showBorders={true}
      columnAutoWidth={true}
      keyExpr="Id"
      parentIdExpr="parent"
      // onSaving={handleSave}
      onRowInserting={onRowInserting}
      onRowClick={(e) => console.log(e)}
      onRowRemoving={(e) => handleDelete(e.data.Id)}
      onRowUpdating={(e) => handleEdit(e)}
    >
      <SearchPanel visible={true} />
      <RowDragging
        onDragChange={onDragChange}
        onReorder={onReorder}
        allowReordering={allowReordering}
        showDragIcons={true}
        allowDropInsideItem={true}
        // onAdd={handleSave}
      />
      <Editing
        mode="row"
        allowAdding={allowAdding}
        allowUpdating={allowUpdating}
        allowDeleting={allowDeleting}
        useIcons
      />
      {ColAttributes?.map((ele) => (
        <Column dataField={ele.field} caption={ele.caption} />
      ))}

      <Column type="buttons" width={120}>
        <Button name="add" />
        <Button name="edit" />
        <Button name="delete" />
        <Button
          hint="Add Products"
          icon="checklist"
          visible={true}
          disabled={false}
          onClick={(e) => {
            setCategoryId(e.row.data.Id);
            setClicked(true);
            setAlreadySelectedItems(e.row.data.items);
            console.log(e);
          }}
        />
      </Column>

      {clicked && (
        <Popup
          title="Select Products"
          visible={clicked}
          onHiding={() => setClicked(false)}
          width={"80%"}
        >
          <ListForm
            selectedItemsFinal={selectedItemsFinal}
            setSelectedItemsFinal={setSelectedItemsFinal}
            alreadySelectedItems={alreadySelectedItems}
            // productsData={productsData}
          />

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
