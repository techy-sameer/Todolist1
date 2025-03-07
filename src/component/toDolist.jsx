import React, { useState } from "react";

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      setTasks(tasks.filter((_, i) => i !== index));
    }
  };

  const startEditing = (index) => {
    setEditingIndex(index);
  };

  const handleEditChange = (e, index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = e.target.value;
    setTasks(updatedTasks);
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #1e3c72, #2a5298, #6a11cb, #2575fc, #ff512f, #dd2476)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 15s ease infinite",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <style>
        {`
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "24px",
          borderRadius: "12px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          maxWidth: "400px",
          width: "100%",
          backdropFilter: "blur(10px)",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "16px",
            color: "#333",
          }}
        >
          To-Do-List 
        </h1>

        {/* Add Task Input */}
        <div style={{ display: "flex", marginBottom: "16px" }}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
            style={{
              flex: "1",
              padding: "12px",
              borderTopLeftRadius: "6px",
              borderBottomLeftRadius: "6px",
              border: "2px solid #38b2ac",
              outline: "none",
            }}
          />
          <button
            onClick={addTask}
            style={{
              backgroundColor: "#38b2ac",
              color: "white",
              padding: "12px",
              borderTopRightRadius: "6px",
              borderBottomRightRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul style={{ listStyle: "none", padding: "0" }}>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#f7fafc",
                padding: "12px",
                marginBottom: "8px",
                borderRadius: "6px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Edit Mode */}
              {editingIndex === index ? (
                <input
                  type="text"
                  value={tasks[index]}
                  onChange={(e) => handleEditChange(e, index)}
                  style={{
                    flex: "1",
                    padding: "6px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              ) : (
                <span style={{ color: "#333" }}>{task}</span>
              )}

              <div>
                {/* Edit Button */}
                <button
                  onClick={() => startEditing(index)}
                  style={{
                    color: "#3182ce",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    marginRight: "8px",
                  }}
                >
                  Edit
                </button>
                {/* Delete Button */}
                <button
                  onClick={() => deleteTask(index)}
                  style={{
                    color: "#e53e3e",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
