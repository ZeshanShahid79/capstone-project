import styled from 'styled-components';

export default function FormInput(props) {
  const {
    label,

    errorMessage,
    onChange,
    id,
    pattern,
    value,
    ...inputProps
  } = props;

  return (
    <section>
      <label htmlFor={label}>{label}</label>
      <StyledInput
        id={label}
        {...inputProps}
        onChange={onChange}
        value={value}
      />
      {value.match(pattern) && <StyledError>{errorMessage}</StyledError>}
    </section>
  );
}

const StyledInput = styled.input`
  display: flex;
  padding: 15px;
  margin: 10px 0px;
`;

const StyledError = styled.p`
  font-size: 12px;
  padding: 3px;
  color: red;
  display: block;
`;
