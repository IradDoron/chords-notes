// import components
import ChordTarget from './components/ChordTarget';
import InputSection from './components/InputSection';
import Submit from './components/Submit';
import IsCorrect from './components/IsCorrect';
import Next from './components/Next';
import Score from './components/Score';
// import hooks
import { useEffect, useState } from 'react';
// import styles
import styled from 'styled-components';

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 200px;
  align-items: center;
  background-color: #223144;
  color: #fff;
 
  & > * {
    margin: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

function App() {
  const [chordTarget, setChordTarget] = useState(
    'Click on "Next" for get The first chord'
  );
  const [answer, setAnswer] = useState(null);
  const [notesInput, setNotesInput] = useState([null, null, null]);
  const isCorrectHolderStr = 'Waiting for answer';
  const [isCorrect, setIsCorrect] = useState(isCorrectHolderStr);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (answer) {
      answer === chordTarget ? setIsCorrect(true) : setIsCorrect(false);
    }
  }, [answer]);

  return (
    <AppWrapper>
      <Score score={score} />
      <ChordTarget chordTarget={chordTarget} />
      <InputSection setNotesInput={setNotesInput} notesInput={notesInput} />
      <Row>
        <Submit
          setAnswer={setAnswer}
          answer={answer}
          notesInput={notesInput}
          setIsCorrect={setIsCorrect}
          chordTarget={chordTarget}
          setScore={setScore}
          score={score}
        />
        <Next
          setChordTarget={setChordTarget}
          setIsCorrect={setIsCorrect}
          isCorrectHolderStr={isCorrectHolderStr}
          setAnswer={setAnswer}
          setNotesInput={setNotesInput}
        />
      </Row>

      <IsCorrect isCorrect={isCorrect} />
    </AppWrapper>
  );
}

export default App;
