import React from "react";
import "../styles/TaskTable.css";

const TaskTable = ({ tasks, updateTask, deleteTask, openEditDialog }) => {
    return (
        <table className="task-table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Due Date</th>
                    <th>Priority</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <tr key={task.id}>
                        <td>{task.title}</td>
                        <td>{task.dueDate}</td>
                        <td>{task.priority}</td>
                        <td>
                            <button
                                onClick={() =>
                                    updateTask({
                                        ...task,
                                        completed: !task.completed,
                                    })
                                }
                            >
                                {task.completed ? "Mark Incomplete" : "Mark Complete"}
                            </button>
                            <button onClick={() => deleteTask(task.id)}>
                                Remove
                            </button>
                            <button
                                onClick={() => openEditDialog(task)}
                                disabled={task.completed} // Disable editing for completed tasks
                            >
                                Modify
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TaskTable;
