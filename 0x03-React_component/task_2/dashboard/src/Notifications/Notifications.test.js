import React from 'react';
import Notifications from './Notifications';
import { mount, render, shallow } from 'enzyme';
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
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: getLatestNotification() },
    ];
    beforeEach(() => {
      component = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    });

    it('contains the NotificationItem component(s)', () => {
      expect(component.find('ul')).toBeDefined();
      expect(component.find('ul').children()).toHaveLength(
        listNotifications.length
      );
      
      expect(component.find('ul').childAt(0).html()).toEqual(
        '<li data-notification-type="default">New course available</li>'
      );
      expect(component.find('ul').childAt(1).html()).toEqual(
        '<li data-notification-type="urgent">New resume available</li>'
      );

       expect(component.find('ul').childAt(2).html()).toEqual(
    '<li data-notification-type="urgent"></li>'
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
  it('should call console.log with the correct message when markAsRead is triggered', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const notifications = [
      { id: 1, type: 'urgent', value: 'Test notification 1' },
      { id: 2, type: 'normal', value: 'Test notification 2' },
    ];
    const wrapper = mount(
      <Notifications displayDrawer={true} listNotifications={notifications} />
    );
    const notificationItem = wrapper.find('NotificationItem').at(0);
    notificationItem.simulate('click');
    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    consoleSpy.mockRestore();
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
