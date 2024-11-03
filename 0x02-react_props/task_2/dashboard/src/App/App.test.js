import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

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
});
