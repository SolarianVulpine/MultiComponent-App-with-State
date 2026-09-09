// Create a Zustand store (`todoStore`) to manage the list of todos, including actions for adding, toggling, and deleting tasks.
import { create } from 'zustand';

// Define the structure of a Todo item
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Define the structure of the store's state and actions
interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

// Create the Zustand store
export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],

  addTodo: (text) => set((state) => ({
    todos: [...state.todos, { id: Date.now(), text, completed: false }],
  })),

  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ),
  })),

  deleteTodo: (id) => set((state) => ({
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
}));