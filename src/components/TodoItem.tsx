import { ITodo } from "../types/data";

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const TodoItem: React.FC<ITodoItem> = (props) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.isCompleted}
        onChange={() => props.toggleTodo(props.id)}
      />
      {props.title}
      <button onClick={() => props.removeTodo(props.id)}>X</button>
    </div>
  );
};
