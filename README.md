# 📋 Task Manager App

A simplified JIRA-style task management tool built with React, React Router and hello-pangea/dnd. Users can create, update, delete and move tasks between workflow stages in a drag-and-drop interface. Tasks persist between sessions via localStorage.

## 🧰 Why I Built This Tool

This project was created to deepen my understanding of React state management, data flow and routing in a realistic, interactive project.

I wanted to explore how tools like React Router and hello-pangea/dnd come together to create a cohesive user experience while keeping the scope achievable for a junior-to-mid-level developer project.

## ✨ Features

-   **Task creation and editing** — Add, edit and delete tasks with accessible, controlled forms.
-   **Drag and drop board** — Move tasks between _To do_, _Doing_, and _Done_ columns using hello-pangea/dnd.
-   **LocalStorage persistence** — Tasks and status changes are saved across sessions.
-   **Dynamic routing** — Navigate between the Backlog, Board, and individual Ticket views each with its own route.
-   **Context-free architecture** — Uses lifted state and `useOutletContext` instead of Context or Reducers for simplicity.
-   **Accessible form design** — Semantic markup, keyboard-friendly inputs, and clear labels.

### 🔜 Coming Next

-   **Vitest** and **React Testing Library** for unit and integration testing.
-   **Persistent drag-and-drop ordering** — Save custom order of tasks within each column and the backlog.
-   **Search and filtering** — Quickly locate tasks by keyword or status.
-   **Mock API integration** — Replace localStorage with an API or JSON Server for realistic CRUD operations.
-   **UI polish** — Refine spacing, typography, and animations for smoother interactions.
-   **Edge cases** — Handle missing or invalid ticket IDs and unsaved form changes gracefully.

## 🧠 Lessons Learned

-   Strengthened my understanding of **lifting state** and managing global data flow in React without Context or Redux.
-   Learned how to **persist and rehydrate state** using localStorage and `useEffect`.
-   Gained hands-on experience with **controlled form components** and maintaining accessibility through labels and semantic markup.
-   Explored **nested routing** with React Router for dynamic page flows that mimic real-world applications.
-   Discovered the importance of **scoping features** — focusing on a solid MVP before expanding with advanced functionality like persistent ordering.
-   Improved debugging and reasoning about **derived state vs. stored state** when filtering and rendering tasks.

## 🚀 Usage

[You can try it live here](https://darryndotdev.github.io/task-manager-app/)

## 🛠 Tech Stack

This project is built using the following technologies:

-   **React**
-   **Vite**
-   **React Router DOM**
-   **hello-pangea/dnd** (for drag-and-drop)
-   **LocalStorage**
-   **CSS Modules**
-   **JavaScript (ES6+)**

## 🤝 Contributing

This is a personal learning project, but feedback and suggestions are always welcome.  
If you’d like to contribute ideas or improvements, please open an issue or share a pull request.
