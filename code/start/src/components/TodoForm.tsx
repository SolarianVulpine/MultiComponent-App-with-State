// Implement a `TodoForm` component for adding new tasks.
// Will use Zustand store ('todoStore') to handle the logic for adding tasks to the list.
import { useTodoStore } from '../store/todoStore';

const TodoForm = () => {
  const { addTodo } = useTodoStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const text = formData.get('text') as string;
    if (text.trim()) {
      addTodo(text.trim());
      e.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" placeholder="Add a new todo..." />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;