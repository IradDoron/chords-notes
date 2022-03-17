import styled from 'styled-components';
import { hoverColor } from '../globals/colors';

export const Button = styled.button`
  background-color: white;
  width: 80px;
  height: 60px;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.3rem;
  &:hover {
    background-color: ${hoverColor};
  }
`;
