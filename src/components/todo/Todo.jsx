import React, { useState, useEffect, useRef } from "react";
import "../../style.css";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todolist, setTodolist] = useState([]);
  const [isEditable, setIsEditable] = useState("");
  const inputRef = useRef();

  const handleSave = (e) => {
    e.preventDefault();

    if (isEditable) {
      const editTodo = todolist.find((i) => i.id === isEditable);
      const updatedTodo = todolist?.map((item) =>
        item.id === editTodo.id ? { id: item?.id, todo } : item
      );
      setTodolist(updatedTodo);
      setIsEditable(0);
      setTodo("");
      return;
    }

    setTodolist((prev) => [...prev, { id: Date.now(), todo: todo }]);
    setTodo("");
  };

  const handleDeleteTodo = (id) => {
    const deleteTodo = todolist.filter((item) => item.id !== id);
    setTodolist([...deleteTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todolist.find((i) => i.id === id);
    setTodo(editTodo?.todo);
    setIsEditable(id);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [todo]);

  useEffect(() => {
    console.log("todolist", todolist);
  }, [todolist]);

  return (
    <div className="App">
      <div className="todo__container">
        <h1>Todo List App</h1>
        <form className="todoForm" onSubmit={handleSave}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            ref={inputRef}
          />
          <button type="submit">{isEditable ? "Edit" : "Go"}</button>
        </form>
        <ul className="allTodos">
          {todolist?.length > 0 &&
            todolist?.map((item) => (
              <li key={item.id} className="singleTodo">
                <span className="todoText">{item?.todo}</span>
                <button onClick={() => handleEdit(item?.id)}>Edit</button>
                <button onClick={() => handleDeleteTodo(item?.id)}>
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
