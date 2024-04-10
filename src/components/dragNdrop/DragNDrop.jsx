import React, { useState } from "react";
import Notes from "./Notes";

const DragNDrop = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
    },
    {
      id: 2,
      text: "This city is very warm. Its hard to live here",
    },
  ]);
  return (
    <div>
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
};

export default DragNDrop;
