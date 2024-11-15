import React, { useState } from "react";
import "../styles/TaskForm.css";

const TaskForm = ({ addTask }) => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDueDate, setTaskDueDate] = useState("");
    const [taskPriority, setTaskPriority] = useState("Low");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const task = {
            id: Date.now(),
            title: taskTitle,
            description: taskDescription,
            dueDate: taskDueDate,
            priority: taskPriority,
            completed: false,
        };
        addTask(task);

        // Reset form fields
        setTaskTitle("");
        setTaskDescription("");
        setTaskDueDate("");
        setTaskPriority("Low");
    };

    return (
        <form onSubmit={handleFormSubmit} className="task-form">
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Task Title"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                />
            </div>
            <div className="input-group">
                <input
                    type="date"
                    value={taskDueDate}
                    onChange={(e) => setTaskDueDate(e.target.value)}
                    required
                />
                <select
                    value={taskPriority}
                    onChange={(e) => setTaskPriority(e.target.value)}
                >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
            <button type="submit" className="add-task-button">
                Add Task
            </button>
        </form>
    );
};

export default TaskForm;
