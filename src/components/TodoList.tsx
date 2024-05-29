import { ITodo } from "./../types/data";
import { TodoItem } from "./TodoItem";

interface ITodoList  {
  items: ITodo[]
}

export const TodoList: React.FC<ITodoList> = ({items}) => {
  return (
    <div>
      {items.map((todo) => (
        <TodoItem key={todo.id}  todo={todo} />
      ))}
    </div>
  );
};
