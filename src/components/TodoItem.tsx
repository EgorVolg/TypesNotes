import { TodoType } from "../types/data";

type TodoItemType = FunctionType & TodoType;
type FunctionType = {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

export const TodoItem: React.FC<TodoItemType> = ({
  title,
  id,
  isCompleted,
  removeTodo,
  toggleTodo,
}) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => toggleTodo(id)}
      />
      {title}
      <button onClick={() => removeTodo(id)}>X</button>
    </div>
  );
};
