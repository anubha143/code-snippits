import React, { useEffect, useState } from "react";
import { useRef } from "react";

const BoxVisualization = () => {
  const data = [5, 3, 8, 1, 7];
  const [dataArr, setDataArr] = useState(data);
  const [isSortingPaused, setIsSortingPaused] = useState(false);
  const timeoutRef = useRef(null);

  function useDidUpdateEffect(fn, inputs) {
    const isMountingRef = useRef(false);

    useEffect(() => {
      isMountingRef.current = true;
      console.log("this will run only once");
    }, []);

    useEffect(() => {
      if (!isMountingRef.current) {
        console.log("this will run again and again");
        return fn();
      } else {
        isMountingRef.current = false;
      }
    }, inputs);
  }

  const handleStartSorting = () => {
    console.log("in the sorting function");
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
        timeoutRef.current = setTimeout(sortStep, 800); // Call sortStep again after a delay to simulate step-by-step sorting
      }
    };

    sortStep(); // Start the sorting process
  };

  useEffect(() => {
    console.log("dataArr", dataArr);
  }, [dataArr]);

  useDidUpdateEffect(() => {
    if (!isSortingPaused) {
      handleStartSorting(); // Trigger sorting process when isSortingPaused changes to false
    }
  }, [isSortingPaused]);

  const handlePause = () => {
    console.log("in the pause");
    clearTimeout(timeoutRef.current);
    setIsSortingPaused(true);
  };

  const handleReset = () => {
    console.log("in the reset");
    clearTimeout(timeoutRef.current);
    setDataArr(data);
    setIsSortingPaused(false);
  };

  const handleResume = () => {
    console.log("in the resume");
    setIsSortingPaused(false);
    console.log("debugging");
    // handleStartSorting();
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
      </div>
    </div>
  );
};

export default BoxVisualization;
