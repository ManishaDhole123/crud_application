import React from 'react';
import { shallow } from "enzyme";
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { IStudent } from './Student.type';
import AddStudent from './AddStudent';

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
      const component = shallow( <AddStudent  />);
      expect(component.length).toBe(1);
    });
  });