import { ITodo } from "../types/data";

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const TodoItem: React.FC<{ todo: ITodoItem }> = ({ todo }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => todo.toggleTodo(todo.id)}
      />
      {todo.title}
      <button onClick={() => todo.removeTodo(todo.id)}>X</button>
    </div>
  );
};
