import React, { useEffect, useState } from "react";
import { useRef } from "react";

const BoxVisualization = () => {
  const data = [5, 3, 8, 1, 7];
  const [dataArr, setDataArr] = useState(data);
  const [isSortingPaused, setIsSortingPaused] = useState(false);
  const timeoutRef = useRef(null);
  const [speed, setSpeed] = useState("800");

  function useDidUpdateEffect(fn, inputs) {
    const isMountingRef = useRef(false);

    useEffect(() => {
      isMountingRef.current = true;
    }, []);

    useEffect(() => {
      if (!isMountingRef.current) {
        return fn();
      } else {
        isMountingRef.current = false;
      }
    }, inputs);
  }

  const handleStartSorting = () => {
    let newArr = [...dataArr];
    let i = 0,
      j = 0;

    const sortStep = () => {
      if (!isSortingPaused && i < newArr.length - 1) {
        if (newArr[j] > newArr[j + 1]) {
          [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
          setDataArr([...newArr]);
        }
        j++;
        if (j >= newArr.length - 1 - i) {
          i++;
          j = 0;
        }
        timeoutRef.current = setTimeout(sortStep, +speed); // Call sortStep again after a delay to simulate step-by-step sorting
      }
    };

    sortStep(); // Start the sorting process
  };

  useDidUpdateEffect(() => {
    if (!isSortingPaused) {
      handleStartSorting(); // Trigger sorting process when isSortingPaused changes to false
    }
  }, [isSortingPaused]);

  const handlePause = () => {
    clearTimeout(timeoutRef.current);
    setIsSortingPaused(true);
  };

  const handleReset = () => {
    clearTimeout(timeoutRef.current);
    setDataArr(data);
    setIsSortingPaused(false);
  };

  const handleResume = () => {
    setIsSortingPaused(false);
  };

  const handleSpeed = (e) => {
    const value = e.target.value;
    setSpeed(value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "24px",
      }}
    >
      <div
        style={{
          display: "flex",

          gap: "24px",
        }}
      >
        {dataArr?.map((item, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "lightgray",
              height: "50px",
              width: `${20 * item}px`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", margin: "24px" }}>
        <button onClick={handleStartSorting}>Start Sorting</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleResume}>Resume</button>
        <button onClick={handleReset}>Reset</button>
        <select
          style={{ marginLeft: "12px" }}
          id="comboA"
          onChange={handleSpeed}
          value={speed}
        >
          <option value="500">Fast</option>
          <option value="800">Medium</option>
          <option value="1500">Slow</option>
        </select>
      </div>
    </div>
  );
};

export default BoxVisualization;
