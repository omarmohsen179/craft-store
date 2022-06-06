import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import "./index.css";
import { theme } from "../../styles/constant";
function IncrementInput({ name, setvalues, value, handleChange }) {
  const { t, i18n } = useTranslation();
  useEffect(() => {}, []);

  return (
    <div className="product-count">
      <form action="#" className="display-flex">
        <div
          className="qtyminus noselect"
          style={{ backgroundColor: theme }}
          onClick={() => setvalues(value - 1)}
        >
          -
        </div>
        <input
          type="text"
          name={name}
          value={value}
          onChange={handleChange}
          className="qty"
          style={{ border: "1px solid " + theme }}
        />
        <div
          onClick={() => setvalues(value + 1)}
          style={{ backgroundColor: theme }}
          className="qtyplus noselect"
        >
          +
        </div>
      </form>
    </div>
  );
}

export default IncrementInput;
