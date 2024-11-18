import React from 'react';
import Footer from './Footer';
import { mount, shallow } from 'enzyme';
import AppContext from '../App/AppContext';

const loggedInContext = {
  user: {
    isLoggedIn: true,
    email: 'test@holberton.com',
  },
};

const loggedOutContext = {
  user: {
    isLoggedIn: false,
    email: '',
  },
};
describe('Footer component tests', () => {

 

  it('renders without crashing', () => {
    const component = mount(
      <AppContext.Provider value={loggedOutContext}>
        <Footer />
      </AppContext.Provider>
    );
    expect(component).toBeDefined();
  });
  it('contains word Copyright', () => {
    const component = mount(
      <AppContext.Provider value={loggedOutContext}>
        <Footer />
      </AppContext.Provider>
    );
    expect(component.text()).toContain('Copyright');
  });
  it('does not display the "Contact us" link when user is logged out', () => {
    const component = mount(
      <AppContext.Provider value={loggedOutContext}>
        <Footer />
      </AppContext.Provider>
    );
    expect(component.find('a').length).toBe(0);
  });
  it('displays the "Contact us" link when user is logged in', () => {
    const component = mount(
      <AppContext.Provider value={loggedInContext}>
        <Footer />
      </AppContext.Provider>
    );
    expect(component.find('a').length).toBe(1);
    expect(component.find('a').text()).toBe('Contact us');
  });
});
