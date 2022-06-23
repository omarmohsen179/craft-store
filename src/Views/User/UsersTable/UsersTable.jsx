import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, CardHeader } from "reactstrap";
import CrudTable from "../../../Components/CrudTable/CrudTable";
import { getUsers } from "./API";
import RolesList from "./RolesList";

function UsersTable() {
  // const data = [
  //   {
  //     id: 0,
  //     username: "abdallah 1",
  //     email: "temp1@gmail.com",
  //     phone_number: "01021313841",
  //     is_confirmed: true,
  //     is_active: false,
  //     role: "web_admin",
  //   },
  //   {
  //     id: 1,
  //     username: "abdallah 2",
  //     email: "tem2p@gmail.com",
  //     phone_number: "01021313841",
  //     is_confirmed: false,
  //     is_active: true,
  //     role: "web_admin",
  //   },
  //   {
  //     id: 2,
  //     username: "abdallah 3",
  //     email: "temp3@gmail.com",
  //     phone_number: "01021313841",
  //     is_confirmed: true,
  //     is_active: true,
  //     role: "web_admin",
  //   },
  //   {
  //     id: 3,
  //     username: "abdallah 4",
  //     email: "temp4@gmail.com",
  //     phone_number: "01021313841",
  //     is_confirmed: true,
  //     is_active: false,
  //     role: "web_admin",
  //   },
  // ];

  const columns = [
    {
      field: "username",
      caption: "User Name",
    },
    {
      field: "email",
      caption: "E-Mail",
    },
    {
      field: "phone_number",
      caption: "Phone Number",
    },
    {
      field: "is_confirmed",
      caption: "Confirmed",
      width: "80px",
      alignment: "center",
    },
    {
      field: "is_active",
      caption: "Active",
      width: "80px",
      alignment: "center",
    },
    {
      field: "roles",
      caption: "Roles",
      comp: () =>
        data && data.map((el) => el.roles.map((el) => el.name + ", ")),
      width: "280px",
      // alignment: "center",
    },
  ];

  const [data, setData] = useState();
  console.log(data);

  useEffect(() => {
    getUsers().then((res) => setData(res));
  }, []);

  const { t } = useTranslation();

  function handleCellColor(e) {
    if (
      e.rowType === "data" &&
      e.column.dataField === "is_confirmed" &&
      e.data.is_confirmed === true
    ) {
      e.cellElement.style.color = "limegreen";
    } else if (
      e.rowType === "data" &&
      e.column.dataField === "is_confirmed" &&
      e.data.is_confirmed === false
    ) {
      e.cellElement.style.color = "#FF1414";
    }
    if (
      e.rowType === "data" &&
      e.column.dataField === "is_active" &&
      e.data.is_active === true
    ) {
      e.cellElement.style.color = "#52cc00";
    } else if (
      e.rowType === "data" &&
      e.column.dataField === "is_active" &&
      e.data.is_active === false
    ) {
      e.cellElement.style.color = "#FF1414";
    }
  }

  return (
    <div className="content" style={{ padding: 20 }}>
      <Card className="card-user">
        <CardHeader>
          <h4>{t("Users Table")}</h4>
        </CardHeader>
        <CardBody>
          <CrudTable
            allowEdit
            allowDelete
            data={data && data}
            colAttributes={columns}
            handleCellColor={handleCellColor}
            FormComponent={RolesList}
          />
        </CardBody>
      </Card>
    </div>
  );
}

export default UsersTable;
