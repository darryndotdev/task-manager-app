# 🪜 Project development steps

A breakdown of how this project was planned and built systematically.

## **1. Project setup**

-   Initialised the project using **Vite + React** for fast development.
-   Installed and configured **React Router DOM** for multi-page routing.
-   Added **hello-pangea/dnd** to handle drag-and-drop interactions.
-   Created a clean **folder structure** for scalability:

![Folder structure](file-structure.png)

## **2. Routing structure**

-   Defined routes using `BrowserRouter`, `Routes`, and `Route`.
-   Created nested routes for:
-   `/` → Homepage
-   `/app/board` → Board view
-   `/app/backlog` → Backlog view
-   `/app/ticket/:id` → Individual task view
-   `/app/new` → Form for creating a new task
-   Used `<Outlet />` inside `AppLayout` to share global state between routes.

## **3. State management & data persistence**

-   Managed global `tasks` array using **`useState`** in `AppLayout`.
-   Synced state with **localStorage** via `useEffect` for persistence.
-   Added helper functions for CRUD operations:
-   `handleAddTasks`
-   `handleUpdateTasks`
-   `handleDeleteTasks`
-   Fetched initial data from `tasks.json` when localStorage was empty.

## **4. Backlog view**

-   Built `Backlog.jsx` to display tasks where `status === 'backlog'`.
-   Created `BacklogItem` component to render individual items with:
-   Task title and ID
-   Delete button using `handleDeleteTasks`
-   Link to `/ticket/:id` for task details

## **5. Form for creating tasks**

-   Built a controlled form with state for `title`, `description`, and `status`.
-   Added accessible labels and semantic HTML.
-   On submission:
-   Generated a unique ID for the task
-   Used `handleAddTasks` to update state
-   Navigated back to the previous view dynamically

## **6. Ticket detail view**

-   Implemented `Ticket.jsx` with `useParams` to read task ID from the URL.
-   Derived the correct task and displayed its editable fields.
-   Added logic for:
-   Invalid or missing task IDs
-   Updating task data and redirecting back after save

## **7. Board view**

-   Created `Board.jsx` to visualize tasks in columns: **To Do**, **Doing**, and **Done**.
-   Integrated **hello-pangea/dnd** for drag-and-drop:
-   Set up `<DragDropContext>` with `<Droppable>` columns.
-   Implemented `onDragEnd` to update task `status` when moved between columns.
-   Displayed each task using a reusable `BoardItem` component.

## **8. UI Components & styling**

-   Used **CSS Modules** for modular, scoped styling.
-   Created reusable components:
-   `<Sidebar />`
-   `<Button />`
-   `<BoardLayout />`
-   `<Icons />`
-   Improved hierarchy and accessibility across all views.

## **10. Reflection & documentation**

-   Scoped the project intentionally for **junior-to-mid** developer complexity.
-   Documented design decisions and reasoning.
-   Outlined future goals:
-   Persisting backlog and board order
-   Task filtering and search
-   API-backed persistence for production readiness
