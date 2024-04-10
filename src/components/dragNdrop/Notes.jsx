import React, { createRef, useEffect, useRef } from "react";
import Note from "./Note";

const Notes = ({ notes = [], setNotes = () => {} }) => {
  const noteRefs = useRef([]);

  useEffect(() => {
    // localstorage logic
    const savedNotesData = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = notes?.map((note) => {
      const savedNotes = savedNotesData?.find((n) => n.id === note.id);
      if (savedNotes) {
        return { ...note, position: savedNotes.position };
      } else {
        const position = determineNewPosition();
        return { ...note, position };
      }
    });
    setNotes(updatedNotes);

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }, [notes?.position]);

  const determineNewPosition = () => {
    // this function randomly generates the positions to display notes on the screen
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 250;
    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };
  };

  const handleDragStart = (note, e) => {
    const { id } = note;
    const noteRef = noteRefs.current[id]?.current;
    const rect = noteRef.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    const startPos = note;

    // this function check where we left our mouse on the screen
    const handleMouseUp = () => {
      const finalRect = noteRef.getBoundingClientRect();
      const newPosition = { x: finalRect.left, y: finalRect.top };

      //   check for overlap
      if (false) {
      } else {
        updateNotePosition(id, newPosition);
      }
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    // tells position of note when dragging it
    const handleMouseMove = (e) => {
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;

      noteRef.style.left = `${newX}px`;
      noteRef.style.top = `${newY}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const checkForOverlap = (id) => {
    currentNoteRef = noteRefs.current[id].current;
    const rect = currentNoteRef.getBoundingClientRect();
  };

  const updateNotePosition = (id, newPosition) => {
    const updatedNotes = notes?.map((note) =>
      note.id === id ? { ...note, position: newPosition } : note
    );
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <div>
      {notes?.map((item) => (
        <Note
          key={item.id}
          content={item?.text}
          initialPosition={item?.position}
          ref={
            noteRefs.current[item.id]
              ? noteRefs.current[item.id]
              : (noteRefs.current[item.id] = createRef())
          }
          onMouseDown={(e) => handleDragStart(item, e)}
        />
      ))}
    </div>
  );
};

export default Notes;
