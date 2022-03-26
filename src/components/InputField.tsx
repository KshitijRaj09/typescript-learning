import { useRef } from 'react';
import {
  StyledInputTextArea,
  TextAreaContainer,
} from '../styleComponents/textArea.style';
import { RiEdit2Line } from 'react-icons/ri';
import { MdOutlineEditOff } from 'react-icons/md';
import { Styledform } from '../styleComponents/form.style';
interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  todoAddHandler: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const InputField = ({ input, setInput, todoAddHandler }: Props) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  return (
    <Styledform
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        todoAddHandler(e);
        inputRef.current?.blur();
      }}
    >
      <TextAreaContainer>
        <div>
          <span className='input-span'>
            <input type='text' value='heading' placeholder='title' />
          </span>
          <span className='edit-options'>
            <RiEdit2Line className='options' />
            <MdOutlineEditOff className='options' />
          </span>
        </div>
        <StyledInputTextArea
          name='notesInput'
          value={input}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setInput(event.target.value)
          }
          ref={inputRef}
          placeholder='Jot something down...'
          onBlur={() => console.log('called on blur')}
          resize='vertical'
        />
      </TextAreaContainer>
      <button type='submit'>Add to Notes</button>
    </Styledform>
  );
};
