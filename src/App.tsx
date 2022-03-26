import React, { useState } from 'react';
import './App.css';
import { InputField } from './components/InputField';
import TodoList from './components/TodoList';
import { Todos } from './model';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [todos, setTodos] = useState<Todos[]>([]);

  const todoAddHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input) return;
    setTodos([...todos, { id: Date.now(), todo: input, isDone: false }]);
    setInput('');
    console.log(todos, input);
  };

  const deleteTodoHandler = (id: number) => {
    const updateTodos = todos.filter((t) => t.id !== id);
    setTodos(updateTodos);
  };

  return (
    <div className='App'>
      TodoList using TypeScript
      <InputField
        input={input}
        setInput={setInput}
        todoAddHandler={todoAddHandler}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        deleteTodoHandler={deleteTodoHandler}
      />
    </div>
  );
};

export default App;
