import { useContext, useState } from 'react';
import { AiOutlineSave } from 'react-icons/ai';
import { NotesContext } from '../App';
import { TextAreaContainer } from '../styleComponents/textArea.style';
import InputComponent from './InputComponent';
import TextAreaComponent from './TextAreaComponent';

interface Props {
  id: number;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  edit: boolean;
  note: string;
  heading: string;
}

const UpdateNotes = ({ id, setEdit, edit, note, heading }: Props) => {
  const [headingUpdate, setHeadingUpdate] = useState<string>(heading);
  const [noteUpdate, setNoteUpdate] = useState<string>(note);

  const { notes, setNotes } = useContext(NotesContext);

  return (
    <TextAreaContainer>
      <div>
        <span className='input-span'>
          <InputComponent>
            <input
              type='text'
              value={headingUpdate}
              placeholder='Heading...'
              name='heading'
              onChange={(event) => setHeadingUpdate(event.target.value)}
            />
          </InputComponent>
        </span>
        <span className='edit-options'>
          <AiOutlineSave
            className='options'
            onClick={() => {
              const foundNote = notes.map((n) => {
                if (n.id === id) {
                  n.heading = headingUpdate;
                  n.note = noteUpdate;
                  n.id = id;
                }
                return n;
              });
              setNotes(foundNote);
              setEdit((prevState) => !prevState);
            }}
          />
        </span>
      </div>
      <TextAreaComponent
        name='note'
        input={noteUpdate}
        setInput={setNoteUpdate}
      />
    </TextAreaContainer>
  );
};

export default UpdateNotes;
