import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('App component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('contains the Notifications component', () => {
    expect(component.find(Notifications).length).toBe(1);
  });

  it('contains the Header component', () => {
    expect(component.find(Header).length).toBe(1);
  });

  it('contains the Login component', () => {
    expect(component.find(Login).length).toBe(1);
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
		expect(component.contains(<CourseList  listCourses={listCourses}/>)).toBe(true);
		expect(component.contains(<Login />)).toBe(false);
	});
});
