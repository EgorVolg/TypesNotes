import { ITodo } from "./../types/data";
import { TodoItem } from "./TodoItem";

interface ITodoList extends ITodo {
  items: ITodo[]
}

export const TodoList: React.FC<ITodoList> = (props) => {
  return (
    <div>
      {props.items.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};
