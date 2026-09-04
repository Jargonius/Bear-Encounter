import type { Enemy } from "./enemy";
import { Gender } from "./gender";
import type { ScenarioType } from "./scenario";

export interface Data {
  scenarios: Array<ScenarioType>;
  genders: Array<Gender>;
  enemies: Array<Enemy>;
}
