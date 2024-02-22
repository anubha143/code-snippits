import { useState } from "react";

const GridGenerator = () => {
  const [table, setTable] = useState({
    rows: "",
    columns: "",
  });
  const [grid, setGrid] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTable((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleClick = () => {
    const { rows, columns } = table;
    const newArray = [];
    for (let i = 0; i < +rows; i++) {
      newArray.push([...Array(+columns)]);
    }
    setGrid(newArray);
  };
  return (
    <div className="grid-generator-wrapper">
      <div className="grid-generator-input">
        <input
          type="text"
          placeholder="rows"
          onChange={handleChange}
          name="rows"
        />
        <input
          type="text"
          placeholder="column"
          onChange={handleChange}
          name="columns"
        />
        <button disabled={!(table.rows && table.columns)} onClick={handleClick}>
          Create Table
        </button>
      </div>
      <div>
        {grid?.map((item, i) => (
          <div key={i} style={{ display: "flex" }}>
            {item?.map((cell, c) => (
              <div
                key={c}
                style={{
                  border: "1px solid black",
                  height: "50px",
                  width: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridGenerator;
