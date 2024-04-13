import React from "react";

const SquareBox = () => {
  const boxes = [
    {
      top: 0,
      left: 0,
    },
    {
      top: 0,
      right: 0,
    },
    {
      bottom: 0,
      left: 0,
    },
    {
      bottom: 0,
      right: 0,
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        style={{
          height: "500px",
          width: "500px",
          backgroundColor: "lightyellow",
          position: "relative",
        }}
      >
        {boxes?.map((item, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "black",
              height: "50px",
              width: "50px",
              position: "absolute",
              ...item,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SquareBox;
