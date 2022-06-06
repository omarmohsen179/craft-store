import React from "react";
import { useTranslation } from "react-i18next";
import { text } from "../../styles/constant";
import { Col, Row } from "shards-react";
import PageTitle from "../User/common/PageTitle";
import classNames from "classnames";
function TitleHeader({ title, details, shaded, attrs }) {
  const { t, i18n } = useTranslation();
  const classes = classNames(
    "ml-sm-auto mr-sm-auto",
    "text-center",
    "text-md-left",
    "mb-sm-0"
  );
  return (
    <Row noGutters className="page-header py-4">
      <Col xs="12" sm="4" className={classes} md="12">
        <span className="text-uppercase page-subtitle">{details}</span>
        <h3 className="page-title">{title}</h3>
      </Col>
    </Row>
  );
}

export default TitleHeader;
