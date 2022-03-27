import { useState } from 'react';
import { MdOutlineEditOff } from 'react-icons/md';
import { RiDeleteBin6Line, RiEdit2Line } from 'react-icons/ri';
import { Notes } from '../model';
import {
  StyledInputTextArea,
  TextAreaContainer,
} from '../styleComponents/textArea.style';
import UpdateNotes from './UpdateNotes';

interface Props {
  note: Notes;
  deleteNoteHandler: (id: number) => void;
  id: number;
}

export const SingleTodo = ({ note, deleteNoteHandler, id }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  return (
    <>
      {edit ? (
        <UpdateNotes
          id={id}
          edit={edit}
          setEdit={setEdit}
          heading={note.heading}
          note={note.note}
        />
      ) : (
        <TextAreaContainer bgColor={true}>
          <div>
            <span className='input-span'>
              <input
                type='text'
                value={note.heading}
                placeholder='title'
                readOnly
                name='heading'
              />
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
            readOnly
            value={note.note}
            resize='vertical'
            name='note'
          />
        </TextAreaContainer>
      )}
    </>
  );
};
