export const saveTasks = (taskList) => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
};

export const getTasks = () => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
};
