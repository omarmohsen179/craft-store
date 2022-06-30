import React, { useState } from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../../../Components/User/common/PageTitle";
import UserDetails from "./Components/UserDetails";
import UserAccountDetails from "./Components/UserAccountDetails";
import "./index.css";
import ChangePassword from "./Components/ChangePassword";
import LoadingPanel from "../../../Components/LoadingPanel";
const EditProfile = () => {
  const [loading, setloading] = useState(false);
  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          title="User Profile"
          subtitle=""
          md="12"
          className="ml-sm-auto mr-sm-auto"
        />
        <LoadingPanel loading={loading} onHiding={() => setloading(false)} />
      </Row>
      <Row className={"main-container "}>
        {
          <Col lg="4">
            <ChangePassword setloading={setloading} />
          </Col>
        }
        <Col lg="8">
          <UserAccountDetails setloading={setloading} />
        </Col>
      </Row>
    </Container>
  );
};

export default EditProfile;
