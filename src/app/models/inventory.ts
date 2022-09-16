import { User } from "../security/models/user";
import { Item } from "./item";

export interface Inventory {
  id: number;
  user: User;
  items: Item[];
}
