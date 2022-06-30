import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, CardHeader } from "shards-react";
import ButtonComponent from "../../../../Components/ButtonComponent";
import LoadingAnimation from "../../../../Components/LoadingAnimation/LoadingAnimation";
import MasterTable from "../../../../Components/MasterTable/MasterTable";

import { HOME_ITEMS, SUBMIT_HOME_ITEMS } from "../api";

function HomeItems({ setloading }) {
  const [dataSource, setDataSource] = useState();
  const [main, setmain] = useState([]);
  const { t, i18n } = useTranslation();
  const [selectedItems, setSelectedItems] = useState([]);
  const colAttributes = useMemo(
    () => [
      {
        field: "id",
        caption: "id",
      },
      {
        field: "name",
        caption: "Name",
      },
      {
        field: "name_en",
        caption: "Name (EN)",
      },
    ],
    []
  );
  useEffect(() => {
    //setAlreadySelectedItems([2]);
    HOME_ITEMS().then((res) => {
      setSelectedItems(res[1]);
      setmain(res[1]);
      setDataSource(res[0]);
    });
  }, []);
  const onSelect = useCallback((e) => {
    setSelectedItems(e.selectedRowKeys);
  }, []);

  const submit = () => {
    setloading(true);
    SUBMIT_HOME_ITEMS(selectedItems)
      .then((res) => {
        setSelectedItems(res);
        setmain(res);
        //setDataSource(res[0]);
        alert(t("Saved Successfully"));
      })
      .catch(() => alert(t("Error! Try Again later")))
      .finally(() => setloading(false));
  };
  return (
    <div className="content" style={{ padding: 20 }}>
      <MasterTable
        dataSource={dataSource}
        colAttributes={colAttributes}
        height={"400px"}
        columnChooser={false}
        showCheckBoxesMode={"always"}
        onSelectionChanged={onSelect}
        keyExpr="id"
        selectedRowKeys={selectedItems}
      />
      <div style={{ marginTop: 20 }}>
        <ButtonComponent
          disable={main === selectedItems}
          onClick={submit}
          type="button"
          title={"Save"}
        />
      </div>
    </div>
  );
}

export default HomeItems;
