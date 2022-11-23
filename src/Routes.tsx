import React, { Component } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AddStudent from './component/AddStudent';
import { IStudent } from './component/Student.type';
import StudentList from './component/StudentList';


export default class RouteOne extends Component {
  render() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/"  element={<StudentList onDeleteClickHandler={function (data: IStudent): void {
                    throw new Error('Function not implemented.');
                } } onEdit={function (data: IStudent): void {
                    throw new Error('Function not implemented.');
                } } studentValues={[]} tableName={''}/>} />

          <Route path="/userlist"element={<StudentList onDeleteClickHandler={function (data: IStudent): void {
                    throw new Error('Function not implemented.');
                } } onEdit={function (data: IStudent): void {
                    throw new Error('Function not implemented.');
                } } studentValues={[]} tableName={''}/>} />
         
          <Route path="/userForm" element={<AddStudent/>}/>

          <Route path="/userForm/:id" element={<AddStudent/>}/>
         
     
        </Routes>
      </BrowserRouter>
    );
  }
}
