import React from 'react';
import { shallow } from "enzyme";

import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ViewStudent from './ViewStudent';
import { IStudent } from './Student.type';

configure({ adapter: new Adapter() });
const data:IStudent = {
    id :3,
    phone:"",
    firstName: "",
    lastName: "",
    email: "",    
  };

describe('<StatementsListContainer/>', () => {
    it('should shallow render without crashing', () => {
      const component = shallow( <ViewStudent onClose={jest.fn() } data={data} />);
      expect(component.length).toBe(1);
    });
  });