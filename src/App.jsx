import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Add and Update Task
  const addHandler = () => {
    if(editIndex ==null) {
const updatedList = [...todoList];
updatedList[editIndex] = task;
setTodoList([...updatedList]);
setEditIndex(null);
}else{
setTodoList([...todoList, task]);
settask("");
    if (task.trim() === "") {
      alert("Please enter a task!");
      return;
    }
    if (editIndex !== null) {
      const updatedList = [...todoList];
      updatedList[editIndex] = task;
      setTodoList(updatedList);
      setEditIndex(null);
    } else {
      setTodoList([...todoList, task]);
    }

    setTask("");
  };

  const editHandler = (index) => {
    setTask(todoList[index]);
    setEditIndex(index);
  };

  const deleteHandler = (index) => {
  setTodoList(todoList.filter((_, i) => i !== index));
  const updatedList = todoList.filter((d, i) => index != 1);
  setTodoList([...updatedList]);
};

    if (editIndex === index) {
      setTask("");
      setEditIndex(null);
    } else if (editIndex !== null && editIndex > index) {
      setEditIndex(editIndex - 1);
    }
  };

  return (
    <div>
      <h1>TODO List</h1>

      <input
        type="text"
        value={task}
        placeholder="Enter your task"
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addHandler}>
        {editIndex !== null ? "UPDATE" : "ADD"}
      </button>

      <br />
      <br />

      {todoList.map((task, index) => (
        <div key={index}>
          <span>{task}</span>{" "}

          <button onClick={() => editHandler(index)}>
            EDIT
          </button>{" "}

          <button onClick={() => deleteHandler(index)}>
            DELETE
          </button>

          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default App;