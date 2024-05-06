import React, { useState } from "react";

const ShuffleColors = () => {
  const color = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "cyan",
    "magenta",
  ];
  const [displayColor, setDisplayColor] = useState(color);
  const handleColorShuffle = () => {
    let array = [...displayColor];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setDisplayColor(array);
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      {displayColor?.map((item) => (
        <div
          style={{
            backgroundColor: `${item}`,
          }}
        ></div>
      ))}
      <button
        style={{ position: "absolute", bottom: 12, right: 0, padding: "20px" }}
        onClick={handleColorShuffle}
      >
        Shuffle Color
      </button>
    </div>
  );
};

export default ShuffleColors;
