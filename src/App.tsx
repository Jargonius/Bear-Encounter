import { useState } from 'react';
import './App.css';
import { DATA } from './assets/data';
import PixelButton from './components/pixel-button/PixelButton';
import Scenario from './components/scenario/Scenario';
import './index.css';
import type { Data } from './types/data';
import type { ScenarioType } from './types/scenario';
import { getRandomByProbability } from './utils/probability-selector';
import { replaceEnemy } from './utils/text-replacer';

function App() {
  const [enemy] = useState(getRandomByProbability(DATA.enemies));
  const REPLACED_DATA: Data = replaceEnemy(enemy, DATA);
  const [petName, setPetName] = useState<string>('');
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
    const goodName = petName.toLowerCase() === 'sanchez' || petName.toLowerCase() === 'svenholt';
    const nextTarget = goodName ? 'Likes Name' : petName ? 'Dislikes Name' : target;
    setPetName('');
    const nextScenario = REPLACED_DATA.scenarios.find((s) => s.name === nextTarget) || {
      name: '',
      variants: [
        {
          outcome: 'None',
          probability: 100,
          text: '',
          links: [],
        },
      ],
    };
    if (goodName) {
      nextScenario.variants[0].text = nextScenario.variants[0].text.replaceAll(/\$name/g, petName);
    }
    setScenario(nextScenario);
  };

  const handleTextChange = (text: string) => {
    setPetName(text);
  };

  return (
    <>
      {scenario && scenario.name === 'Title' ? (
        <>
          <span>
            <h1>{enemy.type} Encounter</h1>
            <h2>Version 2.5</h2>
            <h3>© Bret Anderson</h3>
          </span>

          <div className='spacer'></div>
          <span className='flex-column'>
            <PixelButton target='Bear Encounter' onClick={changeScenario} text='Start' />
            <PixelButton text='Changelog' onClick={changeScenario} />
          </span>
          <div className='spacer'></div>
        </>
      ) : (
        <>
          <Scenario scenario={scenario} changeScenario={changeScenario} onTextChange={handleTextChange} />
        </>
      )}
    </>
  );
}

export default App;
