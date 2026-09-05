import { useState } from 'react';
import './App.css';
import { DATA } from './assets/data';
import PixelButton from './components/pixel-button/PixelButton';
import Scenario from './components/scenario/Scenario';
import type { ScenarioType } from './types/scenario';
import { getRandomByProbability } from './utils/probability-selector';

function App() {
  const [enemy] = useState(getRandomByProbability(DATA.enemies));
  const [scenario, setScenario] = useState<ScenarioType>({
    name: 'Title',
    variants: [
      {
        outcome: 'None',
        probability: 100,
        text: '',
        links: [],
      },
    ],
  });

  const changeScenario = (target: string) => {
    setScenario(
      DATA.scenarios.find((s) => s.name === target) || {
        name: '',
        variants: [
          {
            outcome: 'None',
            probability: 100,
            text: '',
            links: [],
          },
        ],
      }
    );
  };

  return (
    <>
      {scenario && scenario.name === 'Title' ? (
        <>
          <div>
            <h1>{enemy.type} Encounter</h1>
            <h2>Version 2.5</h2>
            <h2>© Bret Anderson</h2>
          </div>

          <div className='spacer'></div>
          <PixelButton target='Bear Encounter' onClick={changeScenario} text='Start' />
          <PixelButton text='Changelog' onClick={changeScenario} />
          <div className='spacer'></div>
        </>
      ) : (
        <>
          <Scenario scenario={scenario} changeScenario={changeScenario} />
        </>
      )}
    </>
  );
}

export default App;
