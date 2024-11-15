# **Task Manager**

## **Overview**

The **Task Manager** is a React application tailored to streamline task management. It enables users to effortlessly create, update, delete, and organize tasks. Tasks are automatically categorized into **Upcoming**, **Overdue**, or **Completed**, providing a clear overview of priorities. The app also offers features to filter tasks based on priority and search through titles or descriptions. To ensure data is retained between sessions, tasks are stored locally on the user's device.

## **Key Features**

-   ✅ **Task Handling**: Add, edit, and remove tasks with attributes like title, description, due date, and priority.
-   📅 **Automatic Categorization**: Organize tasks into **Upcoming**, **Overdue**, or **Completed** categories depending on deadlines.
-   🔍 **Search Functionality**: Locate tasks quickly using titles or descriptions.
-   ⌛ **Filter Options**: Filter tasks based on their priority (High, Medium, Low) or completion status.
-   💾 **Persistent Storage**: Leverages local storage to maintain tasks across sessions.
-   🎨 **Intuitive Design**: Features a modern, responsive interface enhanced with **Font Awesome** icons.

## **Technologies Utilized**

-   **React**: For building dynamic and interactive user interfaces.
-   **CSS**: Custom styling for a responsive and user-friendly design.
-   **Font Awesome**: Icon set for enhancing the UI experience.
-   **Local Storage**: Used for storing tasks to maintain data consistency.

## **Setup Guide**

### **Prerequisites**

-   Install [Node.js](https://nodejs.org/) (version 14 or higher).
-   Ensure [Git](https://git-scm.com/) is installed for repository cloning.

### **Steps to Run the Application**

1. Clone the repository:

    ```bash
    git clone https://github.com/aayushDeo/task_manager.git
    ```

2. Navigate to the project directory:

    ```bash
    cd task_manager
    ```

3. Install the necessary dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Open the application in your browser at:

    [http://localhost:3000/](http://localhost:3000/)

## **Project Directory Structure**

```plaintext
task_manager/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Dashboard.js
│   │   ├── TaskForm.js
│   │   ├── TaskList.js
│   │   └── TaskTable.js
│   ├── styles/
│   │   ├── Dashboard.css
│   │   ├── TaskForm.css
│   │   ├── TaskList.css
│   │   └── TaskTable.css
│   ├── utils/
│   │   └── local_storage_utils.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── answers_to_technical_questions.md
├── package-lock.json
├── package.json
└── README.md
```

## **Development Considerations**

-   **Data Storage**: Local storage was chosen to simplify the project and remove the need for a backend.
-   **Task IDs**: Tasks are uniquely identified using timestamps (`Date.now()`), which is sufficient for this use case.
-   **Filter and Search Synergy**: Filters and search functionality work seamlessly together to provide a refined list of tasks.
-   **Input Validation**: Basic validation is implemented, relying on user-provided input to be reasonable.
-   **Search Scope**: Both task titles and descriptions are searched to accommodate diverse user needs.
-   **Streamlined UI**: The task description is hidden in the list view to keep the interface clutter-free and focused.