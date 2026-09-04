import { useEffect, useState } from 'react';
import type { ScenarioType } from '../../types/scenario';
import { getRandomByProbability } from '../../utils/probability-selector';
import './Scenario.css';
import PixelButton from '../pixel-button/PixelButton';

type ScenarioProps = {
  scenario: ScenarioType;
};

export default function Scenario({ scenario }: ScenarioProps) {
  const [variant, SetVariant] = useState(getRandomByProbability(scenario.variants));
  useEffect(() => {
    SetVariant(getRandomByProbability(scenario.variants));
  }, [scenario]);
  console.log(variant);

  return (
    <>
      <span>{variant.text}</span>
      {variant.links.map((link: string) => (
        <PixelButton target={link.split('->')[1]}>{link.split('->')[0]}</PixelButton>
      ))}
    </>
  );
}
