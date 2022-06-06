import React from "react";

import {
  Column,
  DataGrid,
  FilterRow,
  HeaderFilter,
  GroupPanel,
  Scrolling,
  Editing,
  ColumnChooser,
} from "devextreme-react/data-grid";
import "./Table.css";
import "jspdf-autotable";

const ControlsTable = ({
  id = "",
  disabled = false,
  //* [{ }, ...]
  dataSource = [],
  colAttributes = [],
  filterRow = false,
  groupPanel = false,
  headerFilter = false,
  allowAdd = true,
  allowUpdate = false,
  allowDelete = true,
  columnChooser = false,
  onAddButtonClicked,
  onRowRemoving,
  onRowClick,
  onSelectionChanged,
  onRowDoubleClick,
  onRowInserting,
  onSaving,
}) => {
  function cellRender(data) {
    return <img style={{ width: "20%" }} src={data.value} alt="" />;
  }

  return (
    <>
      <DataGrid
        dataSource={dataSource}
        disabled={disabled}
        id={id}
        showRowLines={true}
        hoverStateEnabled={true}
        rtlEnabled={false}
        showBorders={true}
        columnAutoWidth={true}
        allowColumnResizing={true}
        wordWrapEnabled={true}
        selection={{
          mode: "single",
        }}
        onToolbarPreparing={(e) => onToolbarPreparing(e, onAddButtonClicked)}
        onSelectionChanged={onSelectionChanged}
        onRowRemoving={onRowRemoving}
        onRowInserting={onRowInserting}
        onRowDblClick={onRowDoubleClick}
        onRowClick={onRowClick}
        onSaving={onSaving}
      >
        <ColumnChooser enabled={columnChooser} />
        <FilterRow visible={filterRow} />
        <HeaderFilter visible={headerFilter} />
        <GroupPanel visible={groupPanel} />
        <Editing
          mode="Batch"
          useIcons={true}
          allowAdding={allowAdd}
          allowDeleting={allowDelete}
          allowUpdating={allowUpdate}
        ></Editing>
        <Scrolling mode="virtual" rowRenderingMode="virtual" />
        {colAttributes?.length > 0 &&
          colAttributes.map((col, index) => {
            return (
              <Column
                key={index}
                name={col.field}
                dataType={col.dataType || "string"}
                visible={col.isVisable}
                dataField={col.field}
                caption={col.caption}
                alignment={col.alignment || "right"}
                format={col.format}
                cssClass={"tableCell"}
                grouped={col.grouped}
                autoExpandGroup={false}
                cellRender={col.dataType === "Picture" ? cellRender : undefined}
              />
            );
          })}
      </DataGrid>
    </>
  );
};

const onToolbarPreparing = (e, onAddButtonClicked) => {
  let toolbarItems = e.toolbarOptions.items;

  // Modifies an existing item
  toolbarItems.forEach(function (item) {
    if (item.name === "addRowButton" && onAddButtonClicked) {
      item.options = {
        ...item.options,
        onClick: function (e) {
          // Implement custom save logic here
          onAddButtonClicked();
        },
      };
    }
  });
};

export default React.memo(ControlsTable);
