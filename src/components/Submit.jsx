import { Chord } from '@tonaljs/tonal';
import { Button } from '../styled-components/Button';

function Submit(props) {
  function handleClick() {
    // format answer and update answer
    const beforeFormatting = Chord.detect(props.notesInput)[0];
    let afterFormatting = '';
    if (beforeFormatting) {
      if (beforeFormatting.charAt(beforeFormatting.length - 1) === 'M') {
        afterFormatting = beforeFormatting.slice(
          0,
          beforeFormatting.length - 1
        );
      } else {
        afterFormatting = beforeFormatting;
      }
    }

    if (afterFormatting === props.chordTarget) {
      props.setScore(props.score + 1);
      console.log();
      props.setIsCorrect(true);
    } else {
      props.setIsCorrect(false);
    }
  }

  return <Button onClick={handleClick}>Submit</Button>;
}

export default Submit;
