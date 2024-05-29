import { ITodo } from "./../types/data";
import { TodoItem } from "./TodoItem";

interface ITodoList {
  items: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const TodoList: React.FC<ITodoList> = ({
  items,
  removeTodo,
  toggleTodo,
}) => {
  return (
    <div>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};
