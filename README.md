# **Task Manager**

## **Overview**

The **Task Manager** is a React-based application designed for efficient task management. Users can create, edit, delete, and organize tasks with ease. The application categorizes tasks as **upcoming**, **overdue**, or **completed**, making it simple to keep track of your workload. Additionally, users can filter tasks by priority and search using task titles or descriptions. To ensure data persistence across sessions, the app utilizes local storage.

## **Features**

-   ✅ **Task Management**: Create, edit, and delete tasks with a title, description, due date, and priority level.
-   📅 **Task Categorization**: Automatically classify tasks as **Upcoming**, **Overdue**, or **Completed** based on their due dates.
-   🔍 **Searching**: Search tasks by title or description.
-   ⌛ **Filtering**: Filter tasks by priority (High, Medium, Low) and status (Completed).
-   💾 **Data Persistence**: Save tasks to local storage to maintain them across sessions.
-   🎨 **User-Friendly Interface**: Clean, responsive design with intuitive UI elements using **Font Awesome** icons.

## **Technologies Used**

-   **React**: Frontend framework for building interactive user interfaces.
-   **CSS**: Custom styles for a modern and responsive design.
-   **Font Awesome**: Icon library for improved user experience.
-   **Local Storage**: Client-side storage for persisting tasks data.

## **Setup Instructions**

### **Prerequisites**

-   [Node.js](https://nodejs.org/) (v14 or higher)
-   [Git](https://git-scm.com/) for cloning the repository

### **Steps**

1. Clone the repository:

    ```bash
    git clone https://github.com/aayushDeo/task_manager.git
    ```

2. Navigate to the project directory:

    ```bash
    cd task_manager
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Open your browser and visit:

    [http://localhost:3000/](http://localhost:3000/)

## **Project Structure**

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

## **Assumptions Made During Development**

-   **Local Storage for Persistence**: Local storage is used to keep the application simple and eliminate the need for backend integration.
-   **Unique Task Identification**: Each task is assigned a unique `id` generated using `Date.now()`, which is considered sufficient for this context.
-   **Simultaneous Filter and Search**: The filter dropdown and search input work together, allowing users to refine task lists based on both criteria.
-   **Basic Input Validation**: The app includes minimal validation, assuming users will provide valid input.
-   **Search Across Title and Description**: The search feature scans both task title and description for matches, accommodating varied user search behaviors.
-   **Compact Task List View**: The task description is hidden in the list view to maintain a simplified and focused interface.
