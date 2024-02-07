import "../../style.css";
import { useEffect, useState } from "react";

export default function TrafficLight() {
  const config = {
    red: {
      backgroundColor: "red",
      duration: 4000,
      next: "yellow",
    },
    yellow: {
      backgroundColor: "yellow",
      duration: 500,
      next: "green",
    },
    green: {
      backgroundColor: "green",
      duration: 3000,
      next: "red",
    },
  };
  const [currentColor, setCurrentColor] = useState("green");

  useEffect(() => {
    const { duration, next } = config[currentColor];
    const timer = setTimeout(() => {
      setCurrentColor(next);
    }, duration);
    return () => {
      clearTimeout(timer);
    };
  }, [currentColor]);

  return (
    <div className="wrapper">
      <>
        {Object.keys(config)?.map((item) => (
          <div
            key={item}
            className={`box ${item === currentColor ? item : ""}`}
          ></div>
        ))}
      </>
    </div>
  );
}
