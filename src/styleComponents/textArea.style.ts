import styled from 'styled-components';

interface TextAreaProps{
  resize: string;
}

interface TextAreaContainerProps{
  bgColor?: boolean;
}

export const StyledInputTextArea = styled.textarea<TextAreaProps>`
  border-radius: 0 0 10px 10px;
  background-color: var(--input-primaryColor);
  resize: ${(props) => props.resize || 'none'};
  padding: 5px;
  border-style: solid dotted dotted;
  border-width: 2px 1px 1px;
  width: min(500px, 90vw);
  height: 150px;
`;

export const TextAreaContainer = styled.div<TextAreaContainerProps>`
  display: inline-block;
  margin: 4px;
  & div {
    padding: 2px 4px;
    border-radius: 10px 10px 0 0;
    background-color: ${(props)=> props.bgColor ? 'var(--savedNotes-backgroundColor)':'var(--textArea-mainConatiner)'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
  }
`;
