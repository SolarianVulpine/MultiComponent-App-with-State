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
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => handleToggle(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;