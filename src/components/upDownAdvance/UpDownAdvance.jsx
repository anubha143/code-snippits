import { useState } from "react";

const UpDpwnAdvance = () => {
  const [addItem, setAddItem] = useState([]);
  const [count, setCount] = useState(1);
  const handleAdd = () => {
    setCount((prev) => prev + 1);
    setAddItem((prev) => [
      ...prev,
      {
        id: new Date().getTime(),
        value: count,
      },
    ]);
  };

  const handleUp = (index) => {
    let arr = [...addItem];
    let newPos = (index - 1) % addItem.length;
    let itemRemoved = arr.splice(index, 1);
    arr.splice(newPos, 0, itemRemoved[0]);
    setAddItem(arr);
  };

  const handleDown = (index) => {
    let arr = [...addItem];
    let newPos = (index + 1) % addItem.length;
    let itemRemoved = arr.splice(index, 1);
    arr.splice(newPos, 0, itemRemoved[0]);
    setAddItem(arr);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
      }}
    >
      {addItem?.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
          }}
        >
          {addItem?.map((item, index) => (
            <div
              style={{
                backgroundColor: "lightgray",
                padding: "12px",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>{item?.value}</div>
              <div>
                <button disabled={index === 0} onClick={() => handleUp(index)}>
                  Up
                </button>
                <button
                  disabled={index === addItem.length - 1}
                  onClick={() => handleDown(index)}
                >
                  Down
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : null}
      <button
        onClick={handleAdd}
        style={{ position: "absolute", bottom: "12px", padding: "12px" }}
      >
        Add
      </button>
    </div>
  );
};

export default UpDpwnAdvance;
