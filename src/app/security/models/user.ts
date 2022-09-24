import { Inventory } from "src/app/models/inventory";
import { Notifications } from "src/app/models/notifications";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  profile: string;
  password: string;
  urlPhoto: string;
  inventory: Inventory;
  notifications: Notifications[];
  coins: number;
  points: number;
  exps: number;
}
