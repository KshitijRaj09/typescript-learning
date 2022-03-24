import { useRef } from 'react';

interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  todoAddHandler: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const InputField = ({ input, setInput, todoAddHandler }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        todoAddHandler(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type='text'
        name='todoInput'
        value={input}
        onChange={(event) => setInput(event.target.value)}
        ref={inputRef}
      />
      <button type='submit'>Add</button>
    </form>
  );
};
