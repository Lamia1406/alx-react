import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';

describe('Login component tests', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Login />);
  });

  it('renders without crashing', () => {
    expect(component).toBeDefined();
  });
  it('contains an <input> tag', () => {
    expect(component.find('input').length).toBe(2);
  });
  it('contains an <label> tag', () => {
    expect(component.find('label').length).toBe(2);
  });
});
