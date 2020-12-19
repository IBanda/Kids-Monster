import Panel from './Panel';

import Button from './Button';
export default function PartsPanel({ handleClick }) {
  return (
    <Panel>
      <Button onClick={handleClick} name="ears">
        <img src="/ears.jpg" alt="ears" />
      </Button>
      <Button onClick={handleClick} name="eyes">
        <img src="/eyes.jpg" alt="eyes" />
      </Button>
      <Button onClick={handleClick} name="nose">
        <img src="/nose.jpg" alt="nose" />
      </Button>
      <Button onClick={handleClick} name="mouth">
        <img src="/mouth.jpg" alt="mouth" />
      </Button>
    </Panel>
  );
}
