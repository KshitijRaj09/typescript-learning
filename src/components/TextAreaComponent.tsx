import { StyledInputTextArea } from '../styleComponents/textArea.style';

interface Props {
  innerRef?: React.RefObject<HTMLTextAreaElement>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  name?: string;
}
const TextAreaComponent = ({ innerRef, input, setInput, name }: Props) => {
  return (
    <StyledInputTextArea
      name={name}
      value={input}
      onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
        setInput(event.target.value)
      }
      ref={innerRef}
      placeholder='Jot something down...'
      resize='vertical'
    />
  );
};

export default TextAreaComponent;
