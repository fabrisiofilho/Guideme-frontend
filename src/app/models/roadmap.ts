import { Layer } from "./Layer";

export interface Roadmap {
  id: number;
  title: string;
  layers: Layer[];
}
