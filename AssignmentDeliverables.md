# Todo List App Deliverables

This document provides the setup, usage, testing, and evidence for the Todo List application described in the original [assignment README](README.md).

## Application Overview

The application is a React and TypeScript Todo List built with Vite. Zustand provides the shared todo state, Tailwind CSS provides the styling, and Vitest with Testing Library provides automated tests.

The app supports:

- Adding a new todo after trimming leading and trailing whitespace.
- Toggling a todo between incomplete and complete. Completed todos are shown with a strikethrough.
- Deleting an individual todo.
- Clearing the input after a todo is successfully added.

## Prerequisites

- Node.js and npm installed locally.
- A terminal opened at the repository root.

## Install and Start the App

The runnable project is in `code/start`. From the repository root, install its dependencies:

```bash
cd code/start
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

For a production build and local preview:

```bash
npm run build
npm run preview
```

## How to Use the App

1. Enter a task in the `Add a new todo...` field.
2. Select **Add**. The trimmed task appears in the list and the input is cleared.
3. Select the task text to toggle its completed state. Completed tasks use strikethrough styling.
4. Select **Delete** beside a task to remove it.

### Functioning Screenshot

![Running Todo List application](code/start/src/assets/runningApp.jpe)

The screenshot shows the application running with a completed task and an active task. It also shows the empty input after a task was submitted.

## Project Structure

- `src/store/todoStore.ts`: Zustand store containing the todo state and add, toggle, and delete actions.
- `src/components/TodoForm.tsx`: Form for validating, trimming, and adding task text.
- `src/components/TodoList.tsx`: List UI and controls for toggling and deleting tasks.
- `src/components/*.test.tsx`: Component integration tests using Testing Library and mocked Zustand hooks.
- `src/store/todoStore.test.ts`: Store unit tests for each state action.

## Run the Unit Tests

From `code/start`, run the complete Vitest suite in non-watch mode:

```bash
npm test
```

The equivalent direct command is:

```bash
npx vitest --run
```

The test suite verifies:

- A new todo receives an ID and starts incomplete.
- Toggling changes only the selected todo's completion state.
- Deleting removes only the requested todo.
- The form trims valid input, calls the store, and resets the input.
- Whitespace-only input is rejected.
- The list renders active and completed todos and invokes toggle/delete actions.

Verified test result:

```text
Test Files  3 passed (3)
Tests       7 passed (7)
```

## Additional Verification Commands

Run the available quality checks from `code/start`:

```bash
npm run lint
npm run build
```

Both commands pass for the current implementation. The production build runs TypeScript compilation before generating the Vite output in `dist/`.

## Technology Summary

- React 19
- TypeScript
- Vite
- Zustand
- Tailwind CSS
- Vitest
- Testing Library
