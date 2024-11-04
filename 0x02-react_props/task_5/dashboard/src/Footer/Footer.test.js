import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe('Footer component tests', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Footer />);
  });

  it('renders without crashing', () => {
    expect(component).toBeDefined();
  });
  it('contains word Copyright', () => {
    expect(component.text()).toContain('Copyright');
  });
});
