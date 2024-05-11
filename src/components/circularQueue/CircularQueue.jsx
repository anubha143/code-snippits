import React, { useEffect, useState } from "react";

const CircularQueue = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");
  const [boxes, setBoxes] = useState([]);

  function generateId() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    return `${timestamp}-${random}`;
  }

  const handleInput = (e) => {
    setData(e.target.value);
  };
  const handleAdd = () => {
    let newData = +data;
    let newCount = count;
    let newBoxes = [];

    for (let i = 0; i < newData; i++) {
      newCount++;
      newBoxes.push({ id: generateId(), value: newCount });
    }

    setCount(newCount);
    setBoxes((prev) => [...prev, ...newBoxes]);
  };

  const handleDelete = () => {
    let deleteCount = +data;
    let newData = [...boxes];
    newData.splice(0, deleteCount);
    setBoxes(newData);
  };

  useEffect(() => {
    if (boxes.length === 0) {
      setCount(0);
    }
  }, [boxes]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {boxes?.length > 0 ? (
          boxes?.map((item) => (
            <div
              key={item?.id}
              style={{
                backgroundColor: "lightgrey",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item?.value}
            </div>
          ))
        ) : (
          <p>Nothing to display</p>
        )}
      </div>
      <div style={{ display: "flex", position: "absolute", bottom: "40px" }}>
        <input
          type="text"
          value={data}
          onChange={handleInput}
          placeholder="Enter number"
          style={{ outline: "1px solid black", width: "90%" }}
        />
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleDelete} disabled={boxes.length === 0}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CircularQueue;
