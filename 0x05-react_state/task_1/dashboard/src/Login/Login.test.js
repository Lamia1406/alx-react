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
    expect(component.find('input').length).toBe(3);
  });
  it('contains an <label> tag', () => {
    expect(component.find('label').length).toBe(2);
  });
  it('verifies that the submit button is disabled by default', () => {
		expect(component.find('input').at(2).props().disabled).toEqual(true);
	});

	it('verifies that after changing the value of the two inputs, the button is enabled', () => {
		component.find('input').at(0).simulate('change', { target: { name: 'email', value: 'mnortiz.ortiz@gmail.com'} });
		component.find('input').at(1).simulate('change', { target: { name: 'password', value: '012345'} });
		expect(component.find('input').at(2).props().disabled).toEqual(false);
	});
});
