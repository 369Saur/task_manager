import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { getTasks, saveTasks } from "../utils/local_storage_utils";
import "../styles/Dashboard.css";

const Dashboard = () => {
    const [tasks, setTasks] = useState(() => getTasks());
    const [filter, setFilter] = useState("all"); // State for filtering tasks
    const [searchTerm, setSearchTerm] = useState(""); // State for search functionality

    useEffect(() => {
        saveTasks(tasks); // Save tasks to local storage whenever they change
    }, [tasks]);

    const addNewTask = (task) => setTasks([...tasks, task]);
    const modifyTask = (updatedTask) =>
        setTasks(
            tasks.map((task) =>
                task.id === updatedTask.id ? updatedTask : task
            )
        );
    const removeTask = (taskId) =>
        setTasks(tasks.filter((task) => task.id !== taskId));

    // Task categories based on due date and completion status
    const upcoming = tasks.filter(
        (task) => new Date(task.dueDate) > new Date() && !task.completed
    );
    const overdue = tasks.filter(
        (task) => new Date(task.dueDate) <= new Date() && !task.completed
    );
    const completed = tasks.filter((task) => task.completed);

    // Apply filter and search to tasks
    const filteredTasks = tasks.filter((task) => {
        const isFilterMatch =
            filter === "all" ||
            task.priority === filter ||
            (filter === "completed" && task.completed);
        const isSearchMatch =
            task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.description.toLowerCase().includes(searchTerm.toLowerCase());
        return isFilterMatch && isSearchMatch;
    });

    return (
        <div className="dashboard">
            <h1>Task Management</h1>

            <div className="search-filter-container">
                {/* Search Input */}
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search tasks..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* Filter Dropdown */}
                <div className="filter-dropdown">
                    <select
                        onChange={(e) => setFilter(e.target.value)}
                        value={filter}
                    >
                        <option value="all">All Tasks</option>
                        <option value="High">High Priority</option>
                        <option value="Medium">Medium Priority</option>
                        <option value="Low">Low Priority</option>
                        <option value="completed">Completed Tasks</option>
                    </select>
                </div>
            </div>

            <br />

            {/* Form to Add New Task */}
            <TaskForm addTask={addNewTask} />

            {/* Display Tasks in Different Categories */}
            <div className="task-section-container">
                <TaskList
                    title="Upcoming Tasks"
                    tasks={upcoming.filter((task) =>
                        filteredTasks.includes(task)
                    )}
                    updateTask={modifyTask}
                    deleteTask={removeTask}
                />
                <TaskList
                    title="Overdue Tasks"
                    tasks={overdue.filter((task) =>
                        filteredTasks.includes(task)
                    )}
                    updateTask={modifyTask}
                    deleteTask={removeTask}
                />
                <TaskList
                    title="Completed Tasks"
                    tasks={completed.filter((task) =>
                        filteredTasks.includes(task)
                    )}
                    updateTask={modifyTask}
                    deleteTask={removeTask}
                />
            </div>
        </div>
    );
};

export default Dashboard;
