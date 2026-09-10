import type { Data } from "../types/data";
import type { Enemy } from "../types/enemy";

// I crafted this and had AI refactor it.

// Core helper that encapsulates the deep clone and iteration logic
function processDataText(data: Data, formatText: (str: string) => string): Data {
  const updatedData = structuredClone(data);

  updatedData.scenarios.forEach(scenario => {
    scenario.variants.forEach(variant => {
      variant.text = formatText(variant.text);

      variant.links?.forEach(link => {
        link.display = formatText(link.display || '');
      });
    });
  });

  return updatedData;
}

export function replaceEnemy(enemy: Enemy, data: Data): Data {
  const enemyLower = enemy.type.toLowerCase();
  const enemyTitle = enemy.type;

  return processDataText(data, (str) => {
    if (!str) return str;
    return str
      .replaceAll(/\$enemy/g, enemyLower)
      .replaceAll(/\$Enemy/g, enemyTitle);
  });
}

export function replaceText(replaced: RegExp, replacement: string, data: Data): Data {
  return processDataText(data, (str) => {
    if (!str) return str;
    return str.replaceAll(replaced, replacement);
  });
}