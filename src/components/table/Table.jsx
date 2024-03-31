import React, { useState, useRef, useEffect } from "react";
import "../../style.css";

const Table2 = () => {
  const myRef = useRef();
  const data = [
    {
      name: "John",
      age: 25,
      city: "New York",
      role: ["doctor", "teacher"],
      address: {
        city: "Bangalore",
        state: "Karnataka",
        pincode: "263139",
        area: "5th Cross, 3rd Block, Koramangala",
        // shops: {
        //   floor: "random",
        // },
      },
    },
    {
      name: "Jane",
      age: 30,
      city: "Los Angeles",
      role: ["carpentar", "goldsmith"],
      address: {
        city: "Patna",
        state: "Bihar",
        pincode: "263139",
        area: "House no.3, kalaji, ajakar",
        // shops: {
        //   floor: "first",
        // },
      },
    },
    {
      name: "Bob",
      age: 22,
      city: "Chicago",
      role: ["developer", "teacher"],
      address: {
        city: "Bengal",
        state: "West Bengal",
        pincode: "263139",
        area: "Suryamoorthi, ajakar",
        // shops: {
        //   floor: "second",
        // },
      },
    },
    {
      name: "Sob",
      age: 62,
      city: "Chicago",
      role: ["doctor", "music"],
      address: {
        city: "Chennai",
        state: "Tamilnadu",
        pincode: "263139",
        area: "Aleppie, Seddugaramaa",
        // shops: {
        //   floor: "third",
        // },
      },
    },
  ];
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    myRef.current.focus();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Filter by value"
        ref={myRef}
      />
      <table style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Role</th>
            <th>Address</th>
            {/* <th>Shop</th> */}
          </tr>
        </thead>
        <tbody>
          {data
            ?.filter((item) =>
              // Object.values(item).some((value) => {
              //   console.log("printing values", value);
              //   return value
              //     .toString()
              //     .toLowerCase()
              //     .includes(search.toLowerCase());
              // })
              Object.values(item).some((value) => {
                if (typeof value === "object") {
                  return Object.values(value).some((addressValue) =>
                    addressValue
                      .toString()
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  );
                } else {
                  return value
                    .toString()
                    .toLowerCase()
                    .includes(search.toLowerCase());
                }
              })
            )
            ?.map((item, i) => (
              <tr key={i}>
                <td>{item?.name}</td>
                <td>{item?.age}</td>
                <td>{item?.city}</td>
                <td>{item?.role?.join(",")}</td>
                <td>
                  {Object.values(item?.address)
                    .map((item) => item)
                    .join(", ")}
                </td>
                {/* <td>{Object.values(item?.address?.shops?.floor)}</td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
