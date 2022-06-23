import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "shards-react";
import CrudTable from "../../../Components/CrudTable/CrudTable";
import { useTranslation } from "react-i18next";

// import TreeTable from "./TreeTable";
import TreeView from "./TreeView";
import ButtonComponent from "../../../Components/ButtonComponent";
import { ApiBaseUrl } from "../../../Service/config";
import REQUEST from "../../../Service/Request";
import {
  INSERT,
  DeleteCategory,
  GetCategories,
  EditCategory,
  PostUpdatedCategories,
} from "./Api";

function UsersAdmin() {
  // const [categoryData, setCategoryData] = useState([
  //   {
  //     ID: "x1",
  //     parent: "-1",
  //     Full_Name: "John Heart",
  //     Prefix: "Mr.",
  //     Title: "CEO",
  //     City: "Los Angeles",
  //     State: "California",
  //     Email: "jheart@dx-email.com",
  //     Skype: "jheart_DX_skype",
  //     Mobile_Phone: "(213) 555-9392",
  //     Birth_Date: "1964-03-16",
  //     Hire_Date: "1995-01-15",
  //   },
  //   {
  //     ID: "x4",
  //     parent: "-1",
  //     Full_Name: "John Heart",
  //     Prefix: "Mr.",
  //     Title: "CEO4",
  //     City: "Los Angeles",
  //     State: "California",
  //     Email: "jheart@dx-email.com",
  //     Skype: "jheart_DX_skype",
  //     Mobile_Phone: "(213) 555-9392",
  //     Birth_Date: "1964-03-16",
  //     Hire_Date: "1995-01-15",
  //   },
  //   {
  //     ID: "x5",
  //     parent: "-1",
  //     Full_Name: "John Heart",
  //     Prefix: "Mr.",
  //     Title: "CEO2",
  //     City: "Los Angeles",
  //     State: "California",
  //     Email: "jheart@dx-email.com",
  //     Skype: "jheart_DX_skype",
  //     Mobile_Phone: "(213) 555-9392",
  //     Birth_Date: "1964-03-16",
  //     Hire_Date: "1995-01-15",
  //   },
  //   {
  //     ID: "x2",
  //     parent: "x1",
  //     Full_Name: "Samantha Bright",
  //     Prefix: "Dr.",
  //     Title: "COO",
  //     City: "Los Angeles",
  //     State: "California",
  //     Email: "samanthab@dx-email.com",
  //     Skype: "samanthab_DX_skype",
  //     Mobile_Phone: "(213) 555-2858",
  //     Birth_Date: "1966-05-02",
  //     Hire_Date: "2004-05-24",
  //   },
  //   {
  //     ID: "x3",
  //     parent: "x1",
  //     Full_Name: "Arthur Miller",
  //     Prefix: "Mr.",
  //     Title: "CTO",
  //     City: "Denver",
  //     State: "Colorado",
  //     Email: "arthurm@dx-email.com",
  //     Skype: "arthurm_DX_skype",
  //     Mobile_Phone: "(310) 555-8583",
  //     Birth_Date: "1972-07-11",
  //     Hire_Date: "2007-12-18",
  //   },
  // ]);
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
  console.log("category data", categoryData);

  const [editing, setEditing] = useState(true);

  function onDragChange(e) {
    console.log(e);
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
    console.log(sourceData);
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
    INSERT(e.data).then((res) => setCategoryData([...categoryData, res]));
  }
  function handleDelete(e) {
    DeleteCategory(e).then((res) => console.log(res));
  }
  function handleEdit(e) {
    EditCategory(e).then((res) => console.log(res));
  }
  function handleClick(e) {
    PostUpdatedCategories(categoryData).then((res) => console.log(res));
  }

  // const { t } = useTranslation();

  // Get Categories //
  useEffect(() => {
    GetCategories().then((response) => {
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
            onRowInserting={(e) => handleInsert(e)}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />

          <div style={{ marginTop: 40 }}>
            <ButtonComponent
              onClick={(e) => handleClick(e)}
              disable={editing}
              title={"Submit"}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default UsersAdmin;
