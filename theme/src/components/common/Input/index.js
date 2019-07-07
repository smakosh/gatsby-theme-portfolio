import styled from "styled-components";
import colors from "tokens/colors";

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 2px solid ${({ color }) => color || colors.primary};
  padding: 0.8rem 1rem;
  border-radius: 7px;
  margin-bottom: 0.5rem;
  transition: 0.3s;

  ${({ error }) =>
    error &&
    `
		border-color: #ff4136;
	`}

  &::placeholder {
    color: #a7a7a7;
  }
`;

export default Input;
