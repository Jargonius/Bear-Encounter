import type { WeightedItem } from "../types/weighted-item";

export function getRandomByProbability<T extends WeightedItem>(items: T[]): T {
  // 1. Get the total sum of all probabilities
  const totalWeight = items.reduce((sum, item) => sum + item.probability, 0);

  // 2. Pick a random value between 0 and totalWeight
  let random = Math.random() * totalWeight;

  // 3. Find the item whose cumulative weight includes the random value
  for (const item of items) {
    if (random < item.probability) {
      return item;
    }
    random -= item.probability;
  }

  // Fallback in case of rounding errors
  return items[items.length - 1];
}