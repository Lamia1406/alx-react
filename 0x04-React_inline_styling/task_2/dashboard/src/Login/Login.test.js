import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
describe('Login component tests', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
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
