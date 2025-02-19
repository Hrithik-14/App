import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-4">
      
      <nav className="navbar navbar-dark bg-dark mb-4">
        <span className="navbar-brand mx-auto">To-Do List</span>
      </nav>
      
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button className="btn btn-primary" onClick={addTask}>
              Add Task
            </button>
          </div>
          <ul className="list-group">
            {tasks.map((t, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between">
                {t}
                <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;


