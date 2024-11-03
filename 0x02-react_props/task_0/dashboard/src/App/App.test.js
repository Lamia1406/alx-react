import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App component tests', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(component).toBeDefined();
  });
});
