import React, { useState } from "react";

const UpDown = () => {
  const data = [
    {
      id: 1,
      text: "what's going on?",
      type: "Down",
    },
    {
      id: 2,
      text: "How's the preparation going on?",
      type: "Down",
    },
    {
      id: 3,
      text: "Why its so hot?",
      type: "Up",
    },
    {
      id: 4,
      text: "Are you working?",
      type: "Down",
    },
    {
      id: 5,
      text: "It's going well",
      type: "Up",
    },
  ];
  const [displayData, setDisplayData] = useState(data);
  const handleClick = (index) => {
    let arr = [...displayData];
    const type = displayData[index].type;
    let newPos = index;
    if (type === "Down") {
      newPos = (index + 1) % displayData.length;
    } else {
      newPos = index === 0 ? displayData.length - 1 : index - 1;
    }
    let itemRemoved = arr.splice(index, 1); // removed the item where user clicked
    arr.splice(newPos, 0, itemRemoved[0]);
    setDisplayData(arr);

    // if (type === "Down" && index != displayData.length - 1) {
    //   let operate = [...displayData];
    //   [operate[index], operate[index + 1]] = [
    //     operate[index + 1],
    //     operate[index],
    //   ];
    //   setDisplayData(operate);
    // } else if (type === "Up" && index != 0) {
    //   let operate = [...displayData];
    //   [operate[index], operate[index - 1]] = [
    //     operate[index - 1],
    //     operate[index],
    //   ];
    //   setDisplayData(operate);
    // } else if (type === "Down") {
    //   let operate = [...displayData];
    //   const result = [
    //     operate[operate.length - 1],
    //     ...operate.slice(0, operate.length - 1),
    //   ];
    //   setDisplayData(result);
    // } else if (type === "Up") {
    //   let operate = [...displayData];
    //   const result = [...operate.slice(1, operate.length), operate[0]];
    //   setDisplayData(result);
    // }
  };

  return (
    <div>
      {displayData?.map((item, i) => (
        <ul key={item.id}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              //   justifyContent: "center",
            }}
          >
            <li>{item?.text}</li>
            <button onClick={() => handleClick(i)}>{item?.type}</button>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default UpDown;
