import React, { useEffect, useState } from "react";
import Cell from "./Cell";
import "../../style.css";

const GridLights = () => {
  const [order, setOrder] = useState([]);
  const [isDeactivated, setIsDeactivated] = useState(false);
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  const deactivateCell = () => {
    // let timer;
    // if (order.length > 0) {
    //   timer = setInterval(() => {
    //     setOrder((prev) => prev.pop());
    //   }, 2000);
    //   console.log("ANUBHAAAA");
    // }
    // if (order?.length === 0) {
    //   console.log("printing order", order);
    //   clearInterval(timer);
    // }
    setIsDeactivated(true);
    const timer = setInterval(() => {
      setOrder((prev) => {
        const newOrder = prev.slice();
        newOrder.pop();
        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivated(false);
        }
        return newOrder;
      });

      // don't update state like this commented code here

      // setOrder((prev) => {
      //   if (prev) {
      //     prev.pop();
      //     console.log("Anubhá", prev);
      //   }
      //   if (prev?.length === 0) clearInterval(timer);
      //   console.log("Annu", prev);
      //   return prev;
      // });
    }, 300);
  };
  const activateCell = (i) => {
    setOrder([...order, i]);
    // if (order.length === config.flat(1).filter(Boolean).length) {
    //   console.log("in this block");
    //   deactivateCell();
    //}
  };
  useEffect(() => {
    if (order?.length === config?.flat(1)?.filter(Boolean)?.length) {
      deactivateCell();
    }
  }, [order]);
  useEffect(() => {
    console.log("ORDER", order);
  }, [order]);
  return (
    <div className="wrapper">
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}
      >
        {config.flat(1).map((item, i) => (
          <>
            {item ? (
              <Cell
                key={i}
                filled={order?.includes(i)}
                onClick={() => activateCell(i)}
                disabled={order?.includes(i) || isDeactivated}
              />
            ) : (
              <span></span>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default GridLights;
