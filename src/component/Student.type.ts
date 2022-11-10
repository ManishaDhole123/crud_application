import { date } from "yup";

export interface IStudent {
  id:number;
  firstName: string,
  lastName: string,
  email: string,
  // phone:string,

  }
  export enum PageEnum {
    list,
    add,
    edit,
  }
  