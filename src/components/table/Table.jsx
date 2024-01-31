import React, { useState } from "react";

const Table2 = () => {
  const data = [
    { name: "John", age: 25, city: "New York" },
    { name: "Jane", age: 30, city: "Los Angeles" },
    { name: "Bob", age: 22, city: "Chicago" },
  ];
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Filter by value"
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {data
            ?.filter((item) =>
              Object.values(item).some((value) =>
                value.toString().toLowerCase().includes(search.toLowerCase())
              )
            )
            ?.map((item, i) => (
              <tr key={i}>
                <td>{item?.name}</td>
                <td>{item?.age}</td>
                <td>{item?.city}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
