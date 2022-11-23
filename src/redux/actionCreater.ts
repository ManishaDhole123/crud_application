import {  DispatchType, IStudent, userAction } from "../component/Student.type";
import { ADD_STUDENT, DELETE_ACTION, DELETE_STUDENT, GET_STUDENT, UPDATE_STUDENT } from "./constant/actionConstant";

export function addStudent(user:IStudent){
const action: userAction = {
    type:ADD_STUDENT,
    user

}
return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500);
}
}
export function deleteStudent(user:IStudent){

    const action:userAction = {
        type:DELETE_STUDENT,
        user
    }
    return (dispatch: DispatchType) => {
        setTimeout(() => {
          dispatch(action)
        }, 500);
    }
}
export function updateStudent(user:IStudent){
const action:userAction ={
    type:UPDATE_STUDENT,
    user
}
return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500);
}
}
export function getStudent(user?:IStudent){
    const action:userAction ={
        type:GET_STUDENT,
        user: user? user : {id:0,firstName:'',lastName:'',email:'',phone:''}
    }
    return (dispatch: DispatchType) => {
        setTimeout(() => {
          dispatch(action)
        }, 500);
    }
}
export function deleteAction(user?:IStudent){
    const action : userAction = {
        type:DELETE_ACTION,
        user: user? user :{id:0,firstName:'',lastName:'',email:'',phone:''}
    }
    return (dispatch: DispatchType) => {
        setTimeout(() => {
          dispatch(action)
        }, 500);
    }
}