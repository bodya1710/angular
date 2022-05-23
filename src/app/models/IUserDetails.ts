import {IUser} from "./IUsers";

export interface IUserDetails extends IUser {
  username: string;
  email: string;
}
