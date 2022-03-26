import { Notes } from '../model';
import { SingleTodo } from './SingleTodo';

interface Props {
  notes: Notes[];
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>;
  deleteNoteHandler: (id: number) => void;
}

const TodoList = ({ notes, setNotes, deleteNoteHandler }: Props) => {
  const renderNoteList = () =>
    notes.map((note) => (
      <SingleTodo
        key={note.id}
        note={note}
        deleteNoteHandler={deleteNoteHandler}
      />
    ));

  return <div>{renderNoteList()}</div>;
};

export default TodoList;
