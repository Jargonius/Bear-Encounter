import type { Data } from "../types/data";
import type { Enemy } from "../types/enemy";

// I crafted this and had AI refactor it.
export function replaceEnemy(enemy: Enemy, data: Data): Data {
  // 1. Create a deep copy of the original data so we can safely mutate it
  const updatedData = structuredClone(data);

  // 2. Cache these values once for performance
  const enemyLower = enemy.type.toLowerCase();
  const enemyTitle = enemy.type;

  // 3. Define the helper function using the cached values
  const formatText = (str) => {
    if (!str) return str;
    return str
      .replaceAll(/\$enemy/g, enemyLower)
      .replaceAll(/\$Enemy/g, enemyTitle);
  };

  // 4. Run the clean mutation loops
  updatedData.scenarios.forEach(scenario => {
    scenario.variants.forEach(variant => {

      variant.text = formatText(variant.text);

      variant.links?.forEach(link => {
        link.display = formatText(link.display);
      });

    });
  });
  return updatedData
}