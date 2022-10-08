import { Content } from "./content";
import { Question } from "./question";

export interface Step {
  id: number;
  title: string;
  bountyCoin: number;
  bountyXp: number;
  difficulty: number;
  conclusion: number;
  idLayer: number;
  contents: Content[];
  isDone: boolean;
  isOpen: boolean;
  questions: Question;
}
