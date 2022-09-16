import { User } from "../security/models/user";
import { Step } from "./step";

export interface UserProgress {
  id: number;
  done: boolean;
  open: boolean;
  step: Step;
  user: User;
}
