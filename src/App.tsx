import React, { useState } from 'react';
import './App.css';
import { InputField } from './components/InputField';
import TodoList from './components/TodoList';
import { Notes } from './model';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [notes, setNotes] = useState<Notes[]>([]);

  const todoAddHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input) return;
    setNotes([...notes, { id: Date.now(), note: input }]);
    setInput('');
  };

  const deleteNoteHandler = (id: number) => {
    const updateTodos = notes.filter((t) => t.id !== id);
    setNotes(updateTodos);
  };

  return (
    <div className='App'>
      Keep-Notes using TypeScript
      <InputField
        input={input}
        setInput={setInput}
        todoAddHandler={todoAddHandler}
      />
      <TodoList
        notes={notes}
        setNotes={setNotes}
        deleteNoteHandler={deleteNoteHandler}
      />
    </div>
  );
};

export default App;
