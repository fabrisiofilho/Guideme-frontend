export interface Challenger {
  id: number;
  title: string;
  question: string;
  result: string;
  options: string;
  bountyCoin: number;
  bountyXp: number;
  points: number;
  isDone: boolean;
}
