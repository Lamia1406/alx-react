import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';
beforeAll(() => {
  global.alert = jest.fn();  // Mock alert
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
    component.setProps({ isLoggedIn: false });
    expect(component.contains(<CourseList />)).toBe(false);
  });

  it('renders courselist if logged in is true', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    component.setProps({ isLoggedIn: true });
    expect(component.contains(<CourseList listCourses={listCourses}/>)).toBe(true);
    expect(component.contains(<Login />)).toBe(false);
  });

  it('calls logOut when Ctrl + h is pressed', () => {
    const logOutMock = jest.fn();
    component.setProps({ logOut: logOutMock });

    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    document.dispatchEvent(event);

    expect(logOutMock).toHaveBeenCalled();
  });
});
