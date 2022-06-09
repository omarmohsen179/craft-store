import React from "react";
import { Card, CardBody, CardHeader } from "shards-react";
import CrudTable from "../../../Components/CrudTable/CrudTable";
import { useTranslation } from "react-i18next";

import TreeTable from "./TreeTable";
import TreeView from "./TreeView";

const categoryData = [
  {
    ID: 1,
    Head_ID: -1,
    Full_Name: "John Heart",
    Prefix: "Mr.",
    Title: "CEO",
    City: "Los Angeles",
    State: "California",
    Email: "jheart@dx-email.com",
    Skype: "jheart_DX_skype",
    Mobile_Phone: "(213) 555-9392",
    Birth_Date: "1964-03-16",
    Hire_Date: "1995-01-15",
  },
  {
    ID: 2,
    Head_ID: 1,
    Full_Name: "Samantha Bright",
    Prefix: "Dr.",
    Title: "COO",
    City: "Los Angeles",
    State: "California",
    Email: "samanthab@dx-email.com",
    Skype: "samanthab_DX_skype",
    Mobile_Phone: "(213) 555-2858",
    Birth_Date: "1966-05-02",
    Hire_Date: "2004-05-24",
  },
  {
    ID: 3,
    Head_ID: 1,
    Full_Name: "Arthur Miller",
    Prefix: "Mr.",
    Title: "CTO",
    City: "Denver",
    State: "Colorado",
    Email: "arthurm@dx-email.com",
    Skype: "arthurm_DX_skype",
    Mobile_Phone: "(310) 555-8583",
    Birth_Date: "1972-07-11",
    Hire_Date: "2007-12-18",
  },
];

// const productsData = {
//   key: "id",
//   data: [
//     { id: 1, text: "Prepare 2016 Financial" },
//     { id: 2, text: "Prepare 2016 Marketing Plan" },
//     { id: 3, text: "Update Personnel Files" },
//     {
//       id: 4,
//       text: "Review Health Insurance Options Under the Affordable Care Act",
//     },
//     { id: 5, text: "New Brochures" },
//     { id: 6, text: "2016 Brochure Designs" },
//     { id: 7, text: "Brochure Design Review" },
//     { id: 8, text: "Website Re-Design Plan" },
//     { id: 9, text: "Rollout of New Website and Marketing Brochures" },
//     { id: 10, text: "Create 2012 Sales Report" },
//   ],
// };

function index() {
  // const { t } = useTranslation();

  return (
    <div className="content" style={{ padding: 20 }}>
      <Card className="card-user">
        <CardHeader>
          <h4>{"Categories"}</h4>
        </CardHeader>
        <CardBody>
          <TreeView categoryData={categoryData} />
        </CardBody>
      </Card>
    </div>
  );
}

export default index;
