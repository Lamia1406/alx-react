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

  it('renders a div with the class App-header', () => {
    expect(component.find('.App-header').exists()).toBe(true);
  });

  it('renders a div with the class App-body', () => {
    expect(component.find('.App-body').exists()).toBe(true);
  });

  it('renders a div with the class App-footer', () => {
    expect(component.find('.App-footer').exists()).toBe(true);
  });
});
