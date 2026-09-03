import { useState } from 'react';
import './PixelButton.css';

interface WrapperProps {
  children?: React.ReactNode;
}
function PixelButton({children}: WrapperProps) {
  // const [count, setCount] = useState(0)
  // const [enemy, setEnemy] = useState(getRandomByProbability(data.enemies));

  return (
    <>
      <span className='pixel-corners--wrapper'>
        <span className='pixel-corners'>{children}</span>
      </span>
    </>
  );
}

export default PixelButton;
