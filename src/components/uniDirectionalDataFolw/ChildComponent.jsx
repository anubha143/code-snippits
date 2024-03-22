import { useState } from "react";

const ChildComponent = ({ sendDataToParent }) => {
  const [inputValue, setInputValue] = useState("");

  // Function to handle input change and send data to parent
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    // Call the callback function from props and pass data to parent
    sendDataToParent(value);
  };

  return (
    <div>
      <h3>Child Component</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
    </div>
  );
};

export default ChildComponent;
