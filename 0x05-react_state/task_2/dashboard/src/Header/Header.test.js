import React from 'react';
import Header from './Header';
import { mount, shallow } from 'enzyme';
import { StyleSheetTestUtils } from "aphrodite";
import AppContext from '../App/AppContext';
const mockUserLoggedIn = { isLoggedIn: true, email: 'test@holberton.com' };
const mockUserLoggedOut = { isLoggedIn: false, email: '' };

describe('Header component tests', () => {
  let component;
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  


  it('renders without crashing', () => {
    const component = shallow(
      <AppContext.Provider value={{ user: mockUserLoggedIn, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );
    expect(component).toBeDefined();
  });
  it('contains an <img> tag and <h1> tag', () => {
    const component = mount(
      <AppContext.Provider value={{ user: mockUserLoggedOut, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );
    expect(component.find('img').length).toBe(1);
    expect(component.find('h1').length).toBe(1);
  });
 
  it('displays logout section when user is logged in', () => {
    const component = mount(
      <AppContext.Provider value={{ user: mockUserLoggedIn, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );

    expect(component.find('#logoutSection').exists()).toBe(true);
    expect(component.find('#logoutSection').text()).toContain('Welcome test@holberton.com');
    expect(component.find('a').text()).toBe('(logout)');
  });
  it('does not display logout section when user is logged out', () => {
    const component = mount(
      <AppContext.Provider value={{ user: mockUserLoggedOut, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );

    expect(component.find('#logoutSection').exists()).toBe(false);
  });
  it('calls logOut when the logout link is clicked', () => {
    const logOutMock = jest.fn();
    const component = mount(
      <AppContext.Provider value={{ user: mockUserLoggedIn, logOut: logOutMock }}>
        <Header />
      </AppContext.Provider>
    );

    // Simulate the click on the logout link
    component.find('a').simulate('click');
    expect(logOutMock).toHaveBeenCalled();
  });
});
