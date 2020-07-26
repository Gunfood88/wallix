import { IUser } from "./user.interace";

export interface IAction {
  type: string
  payload?: IUser | any
}
