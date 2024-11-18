import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';
import { StyleSheetTestUtils } from 'aphrodite';
beforeAll(() => {
  global.alert = jest.fn();  
  StyleSheetTestUtils.suppressStyleInjection();
});
describe('App component', () => {
  let component;

  beforeEach(() => {
    component = mount(<App />);
  });

  it('contains the Notifications component', () => {
    expect(component.find(Notifications).length).toBe(1);
  });

  it('contains the Header component', () => {
    expect(component.find(Header).length).toBe(1);
  });

  it('contains the Footer component', () => {
    expect(component.find(Footer).length).toBe(1);
  });

  it('does not render courselist if logged out is false', () => {
    component.setState({ user: { isLoggedIn: false } });
    expect(component.find(CourseList).length).toBe(0);
  });

  it('renders courselist if logged in is true', () => {
    
    component.setState({ user: { isLoggedIn: true } });
    expect(component.find(CourseList).length).toBe(1);
    expect(component.find(Login).length).toBe(0);
  });

  it('calls logOut when Ctrl + h is pressed', () => {
    const initialState = component.state().user.isLoggedIn;
    component.setState({ user: { isLoggedIn: true } });

    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    document.dispatchEvent(event);

    expect(component.state().user.isLoggedIn).toBe(false)
  });
  it('verifies that the default state for displayDrawer is false', () => {
		expect(component.state().displayDrawer).toEqual(false);
	});
  it('verifies that after calling handleDisplayDrawer, the state should now be true', () => {
		component.instance().handleDisplayDrawer();
		expect(component.state().displayDrawer).toEqual(true);
	});
  it('verifies that after calling handleHideDrawer, the state should now be false', () => {
		component.instance().handleHideDrawer();
		expect(component.state().displayDrawer).toEqual(false);
	});
  it('verifies that the logIn function updates the state correctly', () => {
    const mockEmail = 'test@holberton.com';
    const mockPassword = 'password123';
    component.instance().logIn(mockEmail, mockPassword);

    expect(component.state().user.email).toBe(mockEmail);
    expect(component.state().user.password).toBe(mockPassword);
    expect(component.state().user.isLoggedIn).toBe(true);
  });

  it('verifies that the logOut function updates the state correctly', () => {
    component.setState({ user: { isLoggedIn: true, email: 'test@holberton.com' } });

    component.instance().logOut();

    expect(component.state().user.isLoggedIn).toBe(false);
    expect(component.state().user.email).toBe('');
  });
});
