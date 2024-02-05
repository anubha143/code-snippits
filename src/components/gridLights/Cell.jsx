import React from "react";
import "../../style.css";
const Cell = ({ filled, onClick, disabled }) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={filled ? "cell cell-activated" : "cell"}
        disabled={disabled}
      />
    </>
  );
};

export default Cell;
