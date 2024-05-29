import { useState } from "react";
import { ITodo } from "./types/data";
import { TodoList } from "./components/TodoList";

export const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          title: value,
          id: Date.now(),
          isCompleted: false,
        },
      ]);
      setValue("");
    }
  };

  const handlerChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" value={value} onChange={handlerChange} />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList items={todos} />
    </div>
  );
};
