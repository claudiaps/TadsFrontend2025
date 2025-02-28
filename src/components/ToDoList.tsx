import { useState } from "react";

type ToDo = {
  name: string;
  done: boolean;
};

const ToDoList = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [input, setInput] = useState<string>();

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const addToDo = () => {
    const newToDo = {
      name: input,
      done: false,
    };

    setToDos([newToDo, ...toDos]);
  };

  return (
    <div>
      <div>Todo list</div>
      <input placeholder="Tarefa: " value={input} onChange={onChangeInput} />
      <button onClick={addToDo}>Adicionar</button>
    </div>
  );
};

export default ToDoList;
