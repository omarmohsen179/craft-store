import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "shards-react";

// import TreeTable from "./TreeTable";
import ButtonComponent from "../../../Components/ButtonComponent";
import TreeView from "../../../Components/TreeView/TreeView";

import {
  DELETE_CATEGORY,
  EDIT_CATEGORY,
  GET_CATEGORIES,
  INSERT_CATEGORY,
  POST_UPDATE_CATEGORY,
} from "./api";

function Categories() {
  const ColAttributes = [
    {
      field: "name",
      caption: "Name",
      alignment: "center",
    },
    {
      field: "name_en",
      caption: "Name (EN)",
      alignment: "center",
    },
  ];
  const [categoryData, setCategoryData] = useState();
  const [main, setmain] = useState();
  const [editing, setEditing] = useState(true);

  function onDragChange(e) {
    const visibleRows = e.component.getVisibleRows();
    const sourceNode = e.component.getNodeByKey(e.itemData.Id);
    let targetNode = visibleRows[e.toIndex].node;

    while (targetNode && targetNode.data) {
      if (targetNode.data.Id === sourceNode.data.Id) {
        e.cancel = true;
        break;
      }
      targetNode = targetNode.parent;
    }
  }

  function onReorder(e) {
    const visibleRows = e.component.getVisibleRows();
    let sourceData = e.itemData;
    var temp = categoryData;

    const sourceIndex = temp.indexOf(sourceData);

    if (e.dropInsideItem) {
      sourceData = { ...sourceData, parent: visibleRows[e.toIndex].key };
      temp = [
        ...temp.slice(0, sourceIndex),
        sourceData,
        ...temp.slice(sourceIndex + 1),
      ];
    } else {
      const toIndex = e.fromIndex > e.toIndex ? e.toIndex - 1 : e.toIndex;
      let targetData = toIndex >= 0 ? visibleRows[toIndex].node.data : null;

      if (targetData && e.component.isRowExpanded(targetData.Id)) {
        sourceData = { ...sourceData, parent: targetData.Id };
        targetData = null;
      } else {
        const headId = targetData ? targetData.parent : -1;
        if (sourceData.parent !== headId) {
          sourceData = { ...sourceData, parent: headId };
        }
      }

      temp = [...temp.slice(0, sourceIndex), ...temp.slice(sourceIndex + 1)];

      const targetIndex = temp.indexOf(targetData) + 1;
      temp = [
        ...temp.slice(0, targetIndex),
        sourceData,
        ...temp.slice(targetIndex),
      ];
    }
    setCategoryData(temp);
  }

  function handleInsert(e) {
    INSERT_CATEGORY(e.data).then((res) =>
      setCategoryData([...categoryData, res])
    );
  }
  function handleDelete(e) {
    DELETE_CATEGORY(e).then((res) => console.log(res));
  }
  function handleEdit(e) {
    EDIT_CATEGORY(e).then((res) => console.log(res));
  }
  function handleClick(e) {
    POST_UPDATE_CATEGORY(categoryData).then((res) => console.log(res));
  }

  useEffect(() => {
    GET_CATEGORIES().then((response) => {
      setCategoryData([...response]);
    });
  }, []);
  return (
    <div className="content" style={{ padding: 20 }}>
      <Card className="card-user">
        <CardHeader>
          <h4>{"Categories"}</h4>
        </CardHeader>
        <CardBody>
          <TreeView
            onReorder={(e) => {
              onReorder(e);
              setEditing(false);
            }}
            ColAttributes={ColAttributes}
            onDragChange={onDragChange}
            categoryData={categoryData}
            onRowInserting={handleInsert}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />

          <div style={{ marginTop: 40 }}>
            <ButtonComponent
              onClick={handleClick}
              loading={false}
              title={"Submit"}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Categories;
