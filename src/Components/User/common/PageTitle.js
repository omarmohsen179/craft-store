import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Col } from "shards-react";
import { useTranslation } from "react-i18next";

const PageTitle = ({ title, subtitle, className, ...attrs }) => {
  const { t, i18n } = useTranslation();
  const classes = classNames(
    className,
    "text-center",
    "text-md-left",
    "mb-sm-0"
  );

  return (
    <Col xs="12" sm="4" className={classes} {...attrs}>
      <span className="text-uppercase page-subtitle">{t(subtitle)}</span>
      <h3 className="page-title">{t(title)}</h3>
    </Col>
  );
};

PageTitle.propTypes = {
  /**
   * The page title.
   */
  title: PropTypes.string,
  /**
   * The page subtitle.
   */
  subtitle: PropTypes.string,
};

export default PageTitle;
