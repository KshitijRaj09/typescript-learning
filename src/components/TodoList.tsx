import { Notes } from '../model';
import { SingleTodo } from './SingleTodo';

interface Props {
  notes: Notes[];
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>;
}

const TodoList = ({ notes, setNotes }: Props) => {
  const deleteNoteHandler = (id: number): void => {
    const updateTodos = notes.filter((t) => t.id !== id);
    setNotes(updateTodos);
  };
  const renderNoteList = () =>
    notes.map((note) => (
      <SingleTodo
        key={note.id}
        id={note.id}
        note={note}
        deleteNoteHandler={deleteNoteHandler}
      />
    ));

  return <div>{renderNoteList()}</div>;
};

export default TodoList;
