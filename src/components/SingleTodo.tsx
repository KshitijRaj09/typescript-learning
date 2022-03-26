import { useState } from 'react';
import { MdOutlineEditOff } from 'react-icons/md';
import { RiDeleteBin6Line, RiEdit2Line } from 'react-icons/ri';
import { Notes } from '../model';
import {
  StyledInputTextArea,
  TextAreaContainer,
} from '../styleComponents/textArea.style';

type Props = {
  note: Notes;
  deleteNoteHandler: (id: number) => void;
};

export const SingleTodo = ({ note, deleteNoteHandler }: Props) => {
  const [edit, setEdit] = useState(false);

  return (
    <TextAreaContainer>
      <div>
        <span className='input-span'>
          <input type='text' value='heading' placeholder='title' />
        </span>
        <span className='edit-options'>
          {edit ? (
            <MdOutlineEditOff
              className='options'
              onClick={() => setEdit((prevState) => !prevState)}
            />
          ) : (
            <RiEdit2Line
              className='options'
              onClick={() => setEdit((prevState) => !prevState)}
            />
          )}
          <RiDeleteBin6Line onClick={() => deleteNoteHandler(note.id)} />
        </span>
      </div>
      <StyledInputTextArea
        readOnly={!edit}
        value={note.note}
        resize='vertical'
      />
    </TextAreaContainer>
  );
};
