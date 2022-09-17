import { Layer } from "./layer";


export interface Roadmap {
  id: number;
  title: string;
  layers: Layer[];
}
