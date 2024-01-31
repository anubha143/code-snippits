import React, { useState } from "react";
import Cell from "./Cell";
import "../../style.css";

const GridLights = () => {
  const [order, setOrder] = useState([]);
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  const activateCell = (i) => {
    setOrder([...order, i]);
  };
  return (
    <div className="wrapper">
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}
      >
        {config.flat(1).map((item, i) => (
          <Cell key={i} filled={false} onClick={() => activateCell(i)} />
        ))}
      </div>
    </div>
  );
};

export default GridLights;
