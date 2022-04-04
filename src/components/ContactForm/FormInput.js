import { useState } from 'react';
import styled from 'styled-components';

export default function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  return (
    <>
      <label>{label}</label>
      <StyledInput
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <StyledSpan>{errorMessage}</StyledSpan>
    </>
  );
  function handleFocus() {
    setFocused(true);
  }
}

const StyledInput = styled.input`
  padding: 15px;
  margin: 10px 0px;
  :invalid ~ span {
    display: block;
  }
`;

const StyledSpan = styled.span`
  font-size: 12px;
  padding: 3px;
  color: red;
  display: none;
`;
