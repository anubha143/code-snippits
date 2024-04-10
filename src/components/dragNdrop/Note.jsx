import React from "react";
import { forwardRef } from "react";

const Note = forwardRef(({ content, initialPosition, ...props }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        userSelect: "none",
        left: `${initialPosition?.x}px`,
        top: `${initialPosition?.y}px`,
        border: "1px solid black",
        cursor: "move",
        width: "200px",
        padding: "10px",
        backgroundColor: "lightyellow",
      }}
      {...props}
    >
      📌 {content}
    </div>
  );
});

export default Note;
