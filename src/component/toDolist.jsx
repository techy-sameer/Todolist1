import React, { useState } from "react";

const ToDoList = () => {
  // State to manage tasks
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Function to add a task
  const addTask = () => {
    if (task.trim() === "") return; // Prevent adding empty tasks
    setTasks([...tasks, task]);
    setTask(""); // Clear input field after adding
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="h-screen bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-500 text-white flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6">To-Do List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full p-3 rounded-l-md border-2 border-teal-400"
            placeholder="Add a new task"
          />
          <button
            onClick={addTask}
            className="bg-teal-500 text-white px-6 py-3 rounded-r-md hover:bg-teal-400 transition duration-200"
          >
            Add
          </button>
        </div>
        <ul className="list-none">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-4 mb-3 rounded-md shadow-md"
            >
              <span>{task}</span>
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 hover:text-red-700 transition duration-200"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
