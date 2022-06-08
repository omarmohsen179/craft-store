import React, { useState } from "react";
import SelectBox from "devextreme-react/select-box";
import List from "devextreme-react/list";

import ArrayStore from "devextreme/data/array_store";

function ListForm() {
  const dataSource = new ArrayStore({
    key: "id",
    data: [
      { id: 1, text: "Prepare 2016 Financial" },
      { id: 2, text: "Prepare 2016 Marketing Plan" },
      { id: 3, text: "Update Personnel Files" },
      {
        id: 4,
        text: "Review Health Insurance Options Under the Affordable Care Act",
      },
      { id: 5, text: "New Brochures" },
      { id: 6, text: "2016 Brochure Designs" },
      { id: 7, text: "Brochure Design Review" },
      { id: 8, text: "Website Re-Design Plan" },
      { id: 9, text: "Rollout of New Website and Marketing Brochures" },
      { id: 10, text: "Create 2012 Sales Report" },
    ],
  });

  return (
    <div className="widget-container">
      <List
        dataSource={dataSource}
        height={400}
        showSelectionControls={true}
        selectionMode={"all"}
        selectAllMode={"page"}
        // selectedItemKeys={this.state.selectedItemKeys}
        // onOptionChanged={this.onSelectedItemKeysChange}
      ></List>
    </div>
  );
}

export default ListForm;
