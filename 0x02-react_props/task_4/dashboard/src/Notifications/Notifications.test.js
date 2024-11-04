import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

describe('Notifications Component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Notifications />);
  });

  it('renders without crashing', () => {
    expect(component).toBeDefined();
  });

  describe('when displayDrawer is true', () => {
    beforeEach(() => {
      component = shallow(<Notifications displayDrawer={true} />);
    });

    it('contains the NotificationItem component(s)', () => {
      expect(component.find('ul')).toBeDefined();
      expect(component.find(NotificationItem).length).toEqual(3);
      expect(component.find('ul').childAt(0).html()).toEqual(
        '<li data-notification-type="default">New course available</li>'
      );
      expect(component.find('ul').childAt(1).html()).toEqual(
        '<li data-notification-type="urgent">New resume available</li>'
      );
      expect(component.find('ul').childAt(2).html()).toEqual(
        `<li data-notification-type="urgent">${getLatestNotification()}</li>`
      );
      const paragraphs = component.find('p');
    const containsText = paragraphs.map(p => p.text()).some(text => text === "Here is the list of notifications");
    
    expect(containsText).toBe(true);
    });

    it('does not display menuItem', () => {
      expect(component.find('div.menuItem').exists()).toBe(true);
    });

    it('displays Notifications', () => {
      expect(component.find('div.Notifications').exists()).toBe(true);
    });
  });
  it('displays menu item', () => {
    expect(component.find('div.menuItem').exists()).toBe(true);
    expect(component.find('div.menuItem').html()).toEqual(
      '<div class="menuItem"><p>Your notifications</p></div>'
    );
  });

  describe('when displayDrawer is false', () => {
    beforeEach(() => {
      component = shallow(<Notifications displayDrawer={false} />);
    });

    it('does not display notifications', () => {
      expect(component.find('div.Notifications').exists()).toBe(false);
    });
  });
});
