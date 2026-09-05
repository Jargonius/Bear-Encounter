import type { Link } from "./link";
import type { Outcome } from "./outcome";

export interface Variant {
  outcome: Outcome;
  probability: number,
  text: string;
  links?: Array<Link>;
}