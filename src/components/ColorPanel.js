import styled from 'styled-components';
import Button from './Button';
import Panel from './Panel';

const ColoredButton = styled(Button)`
  background-color: ${(props) => props.bg};
`;

export default function ColorPanel({ handleClick }) {
  return (
    <Panel>
      <ColoredButton onClick={handleClick} bg="red" name="red" />
      <ColoredButton onClick={handleClick} bg="pink" name="pink" />
      <ColoredButton onClick={handleClick} bg="yellow" name="yellow" />
      <ColoredButton onClick={handleClick} bg="green" name="green" />
    </Panel>
  );
}
