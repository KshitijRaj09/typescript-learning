import styled from "styled-components";

export const StyledButton = styled.button`
background-color: var(--button-backgroundColor);
padding: 1em;
border-radius: 45px;
font-weight: 700;
transition: all 0.3s ease 0s;
cursor: pointer;
outline: none;
margin-bottom: 14px;
&:hover{
    background-color: var(--button-backgroundColorHover);
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
 color: #fff;
}
`