import React, { useEffect, useState } from "react";

const ColorPalatte = () => {
  const colors = ["black", "red", "pink", "yellow", "blue"];
  const [renderedColors, setRenderedColors] = useState(colors);
  useEffect(() => {
    const interval = setInterval(() => {
      // TWO WAY OF SETTING STATE ONE WITH USING RETURN STATEMENT AND ONE WITHOUT IT

      //   setRenderedColors((prevColors) => {
      //     const rotatedColors = [
      //       prevColors[prevColors.length - 1],
      //       ...prevColors.slice(0, prevColors.length - 1),
      //     ];
      //     return rotatedColors;
      //   });
      setRenderedColors((prevColors) => [
        prevColors[prevColors.length - 1],
        ...prevColors.slice(0, prevColors.length - 1),
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {renderedColors?.map((color, index) => (
        <div
          key={index}
          style={{ width: "50%", height: "15vh", backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
};

export default ColorPalatte;
