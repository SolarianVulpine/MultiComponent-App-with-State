// Implement a `TodoList` component for displaying and managing existing tasks.
import { useTodoStore } from '../store/todoStore';
import { Checkbox } from '@/components/ui/checkbox.tsx';
import { Item, ItemActions, ItemContent, ItemGroup, ItemMedia, ItemTitle } from '@/components/ui/item.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Trash2 } from 'lucide-react';

const TodoList = () => {
  const { todos, toggleTodo, deleteTodo } = useTodoStore();

  return (
    <ItemGroup className="mt-6">
      {todos.map((todo) => (
        <Item
          key={todo.id}
          variant={todo.completed ? "muted" : "default"}
          className={`cursor-pointer border-b transition-opacity ${todo.completed ? "opacity-60" : ""
            }`}
          onClick={() => toggleTodo(todo.id)}
        >
          <ItemMedia>
            <Checkbox
              checked={todo.completed}
              aria-label={`Complete ${todo.text}`}
              onCheckedChange={() => toggleTodo(todo.id)}
              onClick={(event) => event.stopPropagation()}
            />
          </ItemMedia>

          <ItemContent>
            <ItemTitle
              className={
                todo.completed
                  ? "text-muted-foreground line-through"
                  : ""
              }
            >
              {todo.text}
            </ItemTitle>
          </ItemContent>

          <ItemActions>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={`Delete ${todo.text}`}
              onClick={(event) => {
                event.stopPropagation();
                deleteTodo(todo.id);
              }}
            >
              <Trash2 />
            </Button>
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  );
};

export default TodoList;

// old implementation for comparison
// const TodoList = () => {
//   const { todos, toggleTodo, deleteTodo } = useTodoStore();

//   const handleToggle = (id: number) => {
//     toggleTodo(id);
//   };

//   const handleDelete = (id: number) => {
//     deleteTodo(id);
//   };

//   return (
//     <ul className="mt-6 divide-y divide-[rgba(25,52,58,0.14)]">
//       {todos.map((todo) => (
//         <li
//           key={todo.id}
//           className="flex items-center justify-between gap-4 py-4"
//         >
//           <button
//             type="button"
//             onClick={() => handleToggle(todo.id)}
//             className={`min-w-0 flex-1 text-left ${todo.completed
//               ? "text-[#637477] line-through"
//               : "text-[#19343a]"
//               }`}
//           >
//             {todo.text}
//           </button>

//           <button
//             type="button"
//             onClick={() => handleDelete(todo.id)}
//             className="shrink-0 text-sm font-bold text-[#637477] hover:text-[#ee735d]"
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default TodoList;