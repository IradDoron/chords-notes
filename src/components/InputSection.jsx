import NoteInput from './NoteInput';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
`;

function InputSection(props) {
  const inputsAmount = 3;
  function generateInputs(amount) {
    const arrOfInputs = [];
    for (let i = 0; i < amount; i++) {
      arrOfInputs.push(
        <NoteInput
          setNotesInput={props.setNotesInput}
          notesInput={props.notesInput}
          index={i}
          key={i}
          text={`Note ${i + 1}`}
        />
      );
    }
    return arrOfInputs;
  }
  const noteInputsArr = generateInputs(inputsAmount);
  return <Row>{noteInputsArr}</Row>;
}

export default InputSection;
