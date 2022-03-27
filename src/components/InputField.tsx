import { useContext, useRef } from 'react';
import { TextAreaContainer } from '../styleComponents/textArea.style';
import { Styledform } from '../styleComponents/form.style';
import TextAreaComponent from './TextAreaComponent';
import InputComponent from './InputComponent';
import { NotesContext } from '../App';
import Button from './Button';

export const InputField = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { heading, setHeading, todoAddHandler, input, setInput } =
    useContext(NotesContext);
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
            <InputComponent>
              <input
                type='text'
                value={heading}
                placeholder='Heading...'
                onChange={(event) => setHeading(event.target.value)}
              />
            </InputComponent>
          </span>
        </div>

        <TextAreaComponent
          innerRef={inputRef}
          input={input}
          setInput={setInput}
        />
      </TextAreaContainer>
      <Button />
    </Styledform>
  );
};
