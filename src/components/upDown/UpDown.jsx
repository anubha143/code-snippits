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
  const handleClick = (type, index) => {
    if (type === "Down" && index != displayData.length - 1) {
      let operate = [...displayData];
      [operate[index], operate[index + 1]] = [
        operate[index + 1],
        operate[index],
      ];
      setDisplayData(operate);
    } else if (type === "Up" && index != 0) {
      let operate = [...displayData];
      [operate[index], operate[index - 1]] = [
        operate[index - 1],
        operate[index],
      ];
      setDisplayData(operate);
    } else if (type === "Down") {
      let operate = [...displayData];
      const result = [
        operate[operate.length - 1],
        ...operate.slice(0, operate.length - 1),
      ];
      setDisplayData(result);
    } else if (type === "Up") {
      let operate = [...displayData];
      const result = [...operate.slice(1, operate.length), operate[0]];
      setDisplayData(result);
    }
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
            <button onClick={() => handleClick(item?.type, i)}>
              {item?.type}
            </button>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default UpDown;
