import { ITodo } from "../types/data";

interface ITodoItem extends ITodo{}

export const TodoItem: React.FC<{todo:ITodo}> = ({todo}) => {
//   const { id, title, isCompleted } = props;
  return (
    <div>
      <input type="checkbox" checked={todo.isCompleted} />
      {todo.title}
      <button>X</button>
    </div>
  );
};
