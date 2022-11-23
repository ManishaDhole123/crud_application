import { date } from "yup";

export interface IStudent {
  [x: string]: any;
  id:number;
  firstName: string,
  lastName: string,
  email: string,
  phone:string,

  }
  export enum PageEnum {
    list,
    add,
    edit,
  }
  export type userState = {
    userStates: IStudent[];
    action:IWebsnackbar;
  };
 export type IWebsnackbar ={
    msg:string,
    open:boolean
  }
  export type userAction = {
    type: string;
    user: IStudent;
  };

 export type DispatchType = (args: userAction) => userAction;
  