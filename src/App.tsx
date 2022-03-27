import React, { useEffect, useState } from 'react';
import './App.css';
import { InputField } from './components/InputField';
import TodoList from './components/TodoList';
import { AppProps, Notes } from './model';

export const NotesContext = React.createContext({} as AppProps);
const loadedlocalStorage = localStorage.getItem('savedNotes')
  ? JSON.parse(localStorage.getItem('savedNotes') || '')
  : [];

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [notes, setNotes] = useState<Notes[]>(loadedlocalStorage);
  const [heading, setHeading] = useState<string>('');

  const todoAddHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input) return;
    setNotes([...notes, { id: Date.now(), heading: heading, note: input }]);
    setInput('');
    setHeading('');
  };

  useEffect(() => {
    localStorage.setItem('savedNotes', JSON.stringify(notes));
  }, [notes]);
  let data: AppProps = {
    input,
    setInput,
    todoAddHandler,
    heading,
    setHeading,
    notes,
    setNotes,
  };

  return (
    <NotesContext.Provider value={data}>
      <div className='App'>
        <h4>Keep-Notes using TypeScript</h4>
        <InputField />
        <TodoList notes={notes} setNotes={setNotes} />
      </div>
    </NotesContext.Provider>
  );
};

export default App;
