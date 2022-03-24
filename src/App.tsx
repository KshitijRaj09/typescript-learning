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

  const renderTodoList = () => {
    return todos.map((todo) => <TodoList key={todo.id} {...todo} />);
  };

  return (
    <div className='App'>
      TodoList using TypeScript
      <InputField
        input={input}
        setInput={setInput}
        todoAddHandler={todoAddHandler}
      />
      {renderTodoList()}
    </div>
  );
};

export default App;
