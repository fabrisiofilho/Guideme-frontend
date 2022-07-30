import { User } from "./user";

export interface Credential {
  token: string;
  refreshToken: string;
  user: User
}
