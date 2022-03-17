import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 2rem;
`;

function IsCorrect(props) {
  if (typeof props.isCorrect === 'boolean') {
    return (
      <Paragraph>{props.isCorrect ? 'Correct!' : 'Wrong, fix notes'}</Paragraph>
    );
  } else {
    return <Paragraph>{props.isCorrect}</Paragraph>;
  }
}

export default IsCorrect;
