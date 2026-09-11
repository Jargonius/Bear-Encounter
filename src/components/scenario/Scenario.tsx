import { useEffect, useState } from 'react';
import type { ScenarioType } from '../../types/scenario';
import { getRandomByProbability } from '../../utils/probability-selector';
import './Scenario.css';
import PixelButton from '../pixel-button/PixelButton';
import type { Link } from '../../types/link';
import PixelInput from '../pixel-input/PixelInput';
import AnimatedZs from '../animated-zs/AnimatedZs';

type ScenarioProps = {
  scenario: ScenarioType;
  changeScenario: (target: string) => void;
  onTextChange: (text: string) => void;
};

export default function Scenario({ scenario, changeScenario, onTextChange }: ScenarioProps) {
  const [variant, SetVariant] = useState(getRandomByProbability(scenario.variants));
  useEffect(() => {
    SetVariant(getRandomByProbability(scenario.variants));
  }, [scenario]);

  const handleTextChange = (text: string) => {
    onTextChange(text);
  };

  return (
    <>
      {scenario && scenario.name === 'Napping' ? (
        <>
          <AnimatedZs />
        </>
      ) : (
        <>
          <span>{variant.text}</span>
        </>
      )}
      <div className='spacer'></div>
      {scenario.name === 'Tree Right' && <PixelInput label='What do you name it?' onChange={handleTextChange} />}
      <div className='flexbox'>
        {variant.links ? (
          variant.links.map((link: Link, index: number) => (
            <PixelButton key={index} onClick={changeScenario} target={link.target} text={link.display || link.target} />
          ))
        ) : (
          <PixelButton onClick={changeScenario} target={variant.outcome} text='Continue' />
        )}
      </div>
      <div className='spacer'></div>
    </>
  );
}
