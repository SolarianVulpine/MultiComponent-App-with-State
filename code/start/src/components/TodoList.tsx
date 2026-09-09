// Implement a `TodoList` component for displaying and managing existing tasks.
import { useTodoStore } from '../store/todoStore';

const TodoList = () => {
  const { todos, toggleTodo, deleteTodo } = useTodoStore();

  const handleToggle = (id: number) => {
    toggleTodo(id);
  };

  const handleDelete = (id: number) => {
    deleteTodo(id);
  };

  return (
    <ul className="mt-6 divide-y divide-[rgba(25,52,58,0.14)]">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between gap-4 py-4"
        >
          <button
            type="button"
            onClick={() => handleToggle(todo.id)}
            className={`min-w-0 flex-1 text-left ${todo.completed
                ? "text-[#637477] line-through"
                : "text-[#19343a]"
              }`}
          >
            {todo.text}
          </button>

          <button
            type="button"
            onClick={() => handleDelete(todo.id)}
            className="shrink-0 text-sm font-bold text-[#637477] hover:text-[#ee735d]"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;