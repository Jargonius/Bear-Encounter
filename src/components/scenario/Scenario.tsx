import { useEffect, useState } from 'react';
import type { ScenarioType } from '../../types/scenario';
import { getRandomByProbability } from '../../utils/probability-selector';
import './Scenario.css';
import PixelButton from '../pixel-button/PixelButton';
import type { Link } from '../../types/link';

type ScenarioProps = {
  scenario: ScenarioType;
  changeScenario: (target: string) => void;
};

export default function Scenario({ scenario, changeScenario }: ScenarioProps) {
  const [variant, SetVariant] = useState(getRandomByProbability(scenario.variants));
  useEffect(() => {
    SetVariant(getRandomByProbability(scenario.variants));
  }, [scenario]);
  console.log(variant);

  return (
    <>
      <span>{variant.text}</span>
      <div className='spacer'></div>
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
