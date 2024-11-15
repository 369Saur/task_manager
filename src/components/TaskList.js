import React, { useState } from "react";
import TaskTable from "./TaskTable";

const TaskList = ({ title, tasks, updateTask, deleteTask }) => {
    const [editDialogVisible, setEditDialogVisible] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);

    const showEditDialog = (task) => {
        setCurrentTask(task);
        setEditDialogVisible(true);
    };

    const hideEditDialog = () => {
        setEditDialogVisible(false);
        setCurrentTask(null);
    };

    const saveTaskEdits = (updatedTask) => {
        updateTask(updatedTask);
        hideEditDialog();
    };

    return (
        <div className="task-list">
            <h3>{title}</h3>
            {tasks.length === 0 ? (
                <p>No tasks available</p>
            ) : (
                <TaskTable
                    tasks={tasks}
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                    openEditDialog={showEditDialog}
                />
            )}

            {/* Task Edit Dialog */}
            {editDialogVisible && currentTask && (
                <div className="edit-dialog">
                    <div className="edit-dialog-content">
                        <h2>Edit Task</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                saveTaskEdits(currentTask);
                            }}
                        >
                            <div className="form-group">
                                <label>Title:</label>
                                <input
                                    type="text"
                                    value={currentTask.title}
                                    onChange={(e) =>
                                        setCurrentTask({
                                            ...currentTask,
                                            title: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Description:</label>
                                <textarea
                                    value={currentTask.description}
                                    onChange={(e) =>
                                        setCurrentTask({
                                            ...currentTask,
                                            description: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Due Date:</label>
                                <input
                                    type="date"
                                    value={currentTask.dueDate}
                                    onChange={(e) =>
                                        setCurrentTask({
                                            ...currentTask,
                                            dueDate: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Priority:</label>
                                <select
                                    value={currentTask.priority}
                                    onChange={(e) =>
                                        setCurrentTask({
                                            ...currentTask,
                                            priority: e.target.value,
                                        })
                                    }
                                    required
                                >
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <button type="submit">Save</button>
                                <button type="button" onClick={hideEditDialog}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskList;
