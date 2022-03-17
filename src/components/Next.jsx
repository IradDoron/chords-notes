import { Button } from '../styled-components/Button';

function Next(props) {
  function getRandomChord() {
    const tonics = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const types = ['', 'm', 'aug', 'dim'];
    function getRandomItemFromArray(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
    const resStr = `${getRandomItemFromArray(tonics)}${getRandomItemFromArray(
      types
    )}`;

    return resStr;
  }

  function handleClick(e) {
    props.setChordTarget(getRandomChord());
    props.setIsCorrect(props.isCorrectHolderStr);
    props.setAnswer(null);
    const nodeListOfInputEl = document.querySelectorAll('input');
    for (let el of nodeListOfInputEl) {
      el.value = '';
    }
  }

  return <Button onClick={handleClick}>Next</Button>;
}

export default Next;
