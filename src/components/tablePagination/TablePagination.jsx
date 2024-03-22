import { useState } from "react";
import React from "react";

const TablePagination = () => {
  const items = [
    { id: 1, name: "Item A", date: "2022-01-01" },
    { id: 2, name: "Item B", date: "2022-02-15" },
    { id: 3, name: "Item C", date: "2021-12-10" },
    { id: 4, name: "Item T", date: "2022-01-01" },
    { id: 5, name: "Item Z", date: "2022-02-15" },
    { id: 6, name: "Item S", date: "2021-12-10" },
    { id: 7, name: "Item D", date: "2022-01-01" },
    { id: 8, name: "Item I", date: "2022-02-15" },
    { id: 9, name: "Item W", date: "2021-12-10" },
    { id: 10, name: "Item P", date: "2022-01-01" },
    { id: 11, name: "Item F", date: "2022-02-15" },
    { id: 12, name: "Item K", date: "2021-12-10" },
    { id: 13, name: "Item M", date: "2022-01-01" },
    { id: 14, name: "Item V", date: "2022-02-15" },
    { id: 15, name: "Item X", date: "2021-12-10" },
    { id: 16, name: "Item N", date: "2022-01-01" },
    { id: 17, name: "Item O", date: "2022-02-15" },
    { id: 18, name: "Item Q", date: "2021-12-10" },
    // Add more items as needed
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //   pagination logic

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <ul>
        {currItems?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={indexOfLastItem >= items.length}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
