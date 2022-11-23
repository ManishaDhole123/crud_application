import React from 'react';
import { shallow } from "enzyme";
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import StudentList from './StudentList';
import { IStudent } from './Student.type';
import EditStudent from './EditStudent';

configure({ adapter: new Adapter() });


describe('<StatementsListContainer/>', () => {
    it('should shallow render without crashing', () => {
        const data:IStudent = {
          id :3,
          phone:"",
          firstName: "",
          lastName: "",
          email: "",    
        };
      const component = shallow( <EditStudent data={data} onUpdateClickHnd={jest.fn() } onBackButtonhandler={jest.fn() } studentValues={[]} setStudentValues={jest.fn()}  />);
      expect(component.length).toBe(1);
    });
  });