import { useState } from "react";
import { ITodo } from "./types/data";

export const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = () => {
    setTodos([...todos, {
        title: value,
        id: Date.now(),
        isCompleted: false,
    }])
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
};
