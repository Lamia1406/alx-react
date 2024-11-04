import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header component tests', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Header />);
  });

  it('renders without crashing', () => {
    expect(component).toBeDefined();
  });
  it('contains an <img> tag', () => {
    expect(component.find('img').length).toBe(1);
  });
  it('contains an <h1> tag', () => {
    expect(component.find('h1').length).toBe(1);
  });
});
