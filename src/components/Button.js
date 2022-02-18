import styled from "styled-components";
import { THEME } from "../theme";

const Button = styled.button`
  background-color: ${THEME.color.accent};
  font-size: 1.3rem;
  padding: 1.2em 2.2em;
  border: none;
  color: #fff;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.8;
  }
`;

export default Button;
