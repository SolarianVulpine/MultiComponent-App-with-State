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
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        name="text"
        placeholder="Add a new todo..."
        className="min-w-0 flex-1 border border-[rgba(25,52,58,0.14)] bg-white px-3 py-2 text-[#19343a] outline-none placeholder:text-[#637477] focus:border-[#ee735d]"
      />
      <button
        type="submit"
        className="bg-[#ee735d] px-4 py-2 font-bold text-white transition hover:bg-[#d95f4b] focus:outline-2 focus:outline-offset-2 focus:outline-[#ee735d]"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;