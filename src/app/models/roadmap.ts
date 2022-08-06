import { Step } from "./step";

export interface Roadmap {
  id: number;
  title: string;
  step: Step[];
}
