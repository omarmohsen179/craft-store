import React from "react";
import { theme } from "../../styles/constant";
import "./ButtonComponent.css";
import { TailSpin } from "react-loader-spinner";
import { useTranslation } from "react-i18next";
const ButtonComponent = ({
  title,
  type = "button",
  onClick,
  loading = false,
  disable,
  icon,
  color = theme,
}) => {
  const { t, i18n } = useTranslation();
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ backgroundColor: color, borderRadius: 5 }}
      className="site-button-component"
      disabled={disable || loading}
    >
      <i className={icon}></i>{" "}
      {!loading ? t(title) : <TailSpin color="white" height={20} width={20} />}
    </button>
  );
};

export default ButtonComponent;
