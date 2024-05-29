import { ITodo } from "../types/data";

interface ITodoItem extends ITodo{}

export const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, isCompleted } = props;
  return (
    <div>
      <input type="checkbox" checked={isCompleted} />
      {title}
      <button>X</button>
    </div>
  );
};
