import { ITodo } from "./../types/data";
import { TodoItem } from "./TodoItem";

interface ITodoList {
  items: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const TodoList: React.FC<ITodoList> = (props) => {
  const { items, removeTodo, toggleTodo } = props;
  return (
    <div>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
           {...todo}
        />
      ))}
    </div>
  );
};
