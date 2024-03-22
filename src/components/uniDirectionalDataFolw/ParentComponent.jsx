import { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [dataFromChild, setDataFromChild] = useState("");

  // Callback function to retrieve data from the child component
  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Data from Child: {dataFromChild}</p>
      {/* Pass the callback function as a prop to the child component */}
      <ChildComponent sendDataToParent={handleDataFromChild} />
    </div>
  );
};

export default ParentComponent;
