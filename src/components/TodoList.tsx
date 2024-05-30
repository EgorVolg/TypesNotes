import { TodoType } from "./../types/data";
import { TodoItem } from "./TodoItem";

type TodoListType = {
  items: TodoType[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

export const TodoList: React.FC<TodoListType> = ( { items, removeTodo, toggleTodo }) => {

  return (
    <div>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          id={todo.id}
          isCompleted={todo.isCompleted}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};
