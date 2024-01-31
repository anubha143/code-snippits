import React from "react";
import "../../style.css";

const Chip = ({ image, text, onClick }) => {
  return (
    <span className="user-chip" onClick={onClick}>
      <img src={image} alt={text} />
      <span>{text} &times;</span>
    </span>
  );
};

export default Chip;
