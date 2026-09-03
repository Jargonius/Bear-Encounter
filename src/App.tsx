import { useState } from 'react';
import './App.css';
import data from './assets/data.json';
import PixelButton from './components/pixel-button/PixelButton';
import { getRandomByProbability } from './utils/probability-selectors';

function App() {
  const [enemy] = useState(getRandomByProbability(data.enemies));

  return (
    <>
      <div>
        <h1>{enemy.type} Encounter</h1>
        <h2>Version 2.5</h2>
        <h2>© Bret Anderson</h2>
      </div>

      <div className='spacer'></div>
      <PixelButton>Start</PixelButton>
      <PixelButton>Changelog</PixelButton>
      <div className='spacer'></div>
    
    </>
  );
}

export default App;
