# User Stories & acceptance criteria

## 1. View Backlog

**As a user**, I want to view the backlog so I can see all tasks not yet assigned to the board.

**Acceptance Criteria:**

-   Navigating to `/app/backlog` lists all tasks with the status **backlog**.
-   Each task in the backlog can be opened to view its details.

---

## 2. Add a New Task

**As a user**, I want to add a new task from the backlog or board so I can capture work quickly.

**Acceptance Criteria:**

-   Clicking **“New Task”** navigates to:
    -   `/app/backlog/new` when initiated from the backlog
    -   `/app/board/new` when initiated from the board
-   Saving the task creates it and returns the UI to the originating route.
-   The newly created task appears in the backlog or board as appropriate.

---

## 3. Drag and Drop Tasks Between Columns

**As a user**, I want to drag a task between columns on the board to update its status.

**Acceptance Criteria:**

-   Dragging a ticket to a different column updates its **status**.
-   The status change is persisted in both application state and the mock API.

---

## 4. View Task Details

**As a user**, I want to click a ticket to view its details in a dedicated route so I can share the link.

**Acceptance Criteria:**

-   Navigating to `/app/ticket/:id` displays the full task data.
-   Changing the task’s status on the detail page updates it across the board and backlog views.

---

## 5. Edit and Delete Tasks

**As a user**, I want to edit and delete tasks.

**Acceptance Criteria:**

-   The edit form allows updating task fields; saving persists the changes.
-   Deleting a task removes it after confirmation.

---

## 6. Reorder Tasks Within a Column

**As a user**, I want to reorder tasks within a column.

**Acceptance Criteria:**

-   Tasks can be reordered within their column.
-   The order is preserved in the application state using an **order index**.

---
