import React, { useEffect, useRef, useState } from "react";
import "../../style.css";
import Chip from "./Chip";

const MultiSelect = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [selectedUserSet, setSelectedUserSet] = useState(new Set());
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const inputRef = useRef(null);

  const handleSelectedUser = (item) => {
    setSelectedUser((prev) => [...prev, item]);
    setSelectedUserSet(new Set([...selectedUserSet, item?.id]));
    setSearchTerm("");
    setSuggestions([]);
    inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    console.log("this is running");
    if (
      e.key === "Backspace" &&
      e.target.value === "" &&
      selectedUser.length > 0
    ) {
      const lastUser = selectedUser[selectedUser.length - 1];
      handleRemoveChip(lastUser);
    } else if (e.key === "ArrowDown" && suggestions?.length > 0) {
      e.preventDefault();
      setActiveSuggestion((prevIndex) =>
        prevIndex < suggestions?.length - 1 ? prevIndex + 1 : prevIndex - 1
      );
    } else if (e.key === "ArrowUp" && suggestions?.length > 0) {
      e.preventDefault();
      setActiveSuggestion((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    } else if (
      e.key === "Enter" &&
      activeSuggestion >= 0 &&
      activeSuggestion < suggestions.length
    ) {
      handleSelectedUser(suggestions[activeSuggestion]);
    }
  };

  const handleRemoveChip = (data) => {
    // const updatedUser = selectedUser?.filter((item) => item?.id !== data?.id);
    // setSelectedUser(updatedUser);

    // other way of updating state

    setSelectedUser((prevSelectedUser) =>
      prevSelectedUser?.filter((item) => item?.id !== data?.id)
    );

    const updatedId = new Set(selectedUserSet);
    updatedId.delete(data?.id);
    setSelectedUserSet(updatedId);
  };

  useEffect(() => {
    (async () => {
      setActiveSuggestion(0);
      if (searchTerm.trim() === "") {
        setSuggestions([]);
        return;
      }
      try {
        const res = await fetch(
          `https://dummyjson.com/users/search?q=${searchTerm}`
        );
        const data = await res.json();
        console.log("data", data);
        setSuggestions(data?.users);
      } catch (error) {
        console.log("error occured", error);
      }
    })();
  }, [searchTerm]);

  useEffect(() => {
    console.log("suggestions", suggestions);
    console.log("selected user", selectedUser);
    console.log("set", selectedUserSet);
  }, [suggestions, selectedUser, selectedUserSet]);

  return (
    <div className="user-search-container">
      <div className="user-search-input">
        {selectedUser?.map((item) => (
          <Chip
            key={item?.email}
            image={item?.image}
            text={`${item?.firstName} ${item?.lastName}`}
            onClick={() => handleRemoveChip(item)}
          />
        ))}

        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a User"
            ref={inputRef}
            onKeyDown={handleKeyDown}
          />
          {/* Search Suggestion */}
        </div>
      </div>
      <ul className="suggestions-list">
        {suggestions?.map((item, index) => {
          console.log("indi item", item);
          return !selectedUserSet.has(item?.id) ? (
            <li
              className={index === activeSuggestion ? "active" : ""}
              key={item?.email}
              onClick={() => handleSelectedUser(item)}
            >
              <img
                src={item.image}
                alt={`${item.firstName} ${item.lastName}`}
              />
              <span>
                {item?.firstName} {item?.lastName}
              </span>
            </li>
          ) : (
            <></>
          );
        })}
      </ul>
    </div>
  );
};

export default MultiSelect;
