import { Step } from "./step";

export interface Layer {
  id: number;
  steps: Step[];
  idRoadmap: number;
}
