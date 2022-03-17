import styled from 'styled-components';
import { hoverColor } from '../globals/colors';

const inputVars = {
  size: 80,
  margin: 20,
};

const Input = styled.input.attrs((props) => ({
  type: 'text',
  onChange: props.onChange,
  onClick: props.onClick,
}))`
  width: ${inputVars.size}px;
  height: ${inputVars.size}px;
  // margin-left: ${inputVars.margin / 2}px;
  // margin-right: ${inputVars.margin / 2}px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: ${hoverColor};
  }
  &:focus {
    outline: solid #99e 3px;
  }
`;

const Header = styled.h1`
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
`;

function NoteInput(props) {
  function handleChange(e) {
    const currInput = e.target.value;
    const currInputArray = props.notesInput;
    currInputArray[props.index] = currInput;
    props.setNotesInput(currInputArray);
    // format to capital case
    const originalStr = e.target.value;
    let buildStr = '';
    if (originalStr) {
      buildStr += originalStr[0].toUpperCase();
      buildStr += originalStr.slice(1);
      e.target.value = buildStr;
    }
  }

  function handleFocus(e) {
    e.target.select();
  }

  return (
    <Col>
      <Header>{props.text}</Header>
      <Input onChange={handleChange} onClick={handleFocus} />
    </Col>
  );
}

export default NoteInput;
