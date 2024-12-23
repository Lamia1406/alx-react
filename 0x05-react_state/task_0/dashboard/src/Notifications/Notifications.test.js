import React from 'react';
import Notifications from './Notifications';
import { shallow, mount } from 'enzyme';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';
describe('Notifications Component', () => {
  let component;
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
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
      
      expect(component.find('ul').childAt(0).html()).toMatch(
        /^<li[^>]*data-notification-type="default"[^>]*>New course available<\/li>$/
      );
      expect(component.find('ul').childAt(1).html()).toMatch(
        /^<li[^>]*data-notification-type="urgent"[^>]*>New resume available<\/li>$/ 
      );

      expect(component.find('ul').childAt(2).html()).toMatch(
        /^<li[^>]*data-notification-type="urgent"[^>]*><\/li>$/ 
      );
      const paragraphs = component.find('p');
    const containsText = paragraphs.map(p => p.text()).some(text => text === "Here is the list of notifications");
    
    expect(containsText).toBe(true);
    });

    it('does not display menuItem', () => {
      expect(component.find('div.menuItem').exists()).toBe(false);
    });

    it('displays Notifications', () => {
      expect(component.find('div.Notifications').exists()).toBe(true);
    });
  });
  it('displays menu item', () => {
    expect(component.find('div.menuItem').exists()).toBe(true);
    expect(component.find('div.menuItem').childAt(0).html()).toEqual(
      '<p>Your notifications</p>'
    );
  
  });
  it('verifies that clicking on the menu item calls handleHideDrawer', () => {
    const handleHideDrawer = jest.fn();
    const component = mount(
      <Notifications
      displayDrawer={true} 
      handleHideDrawer={handleHideDrawer}
      />
    );

    component.find('button').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();

    jest.restoreAllMocks();
  }); 


  describe('when displayDrawer is false', () => {
    beforeEach(() => {
      component = shallow(<Notifications displayDrawer={false} />);
    });

    it('does not display notifications', () => {
      expect(component.find('div.Notifications').exists()).toBe(false);
    });
    it('verifies that clicking on the menu item calls handleDisplayDrawer', () => {
      const handleDisplayDrawer = jest.fn();
      const handleHideDrawer = jest.fn();
      const component = mount(
        <Notifications
        displayDrawer={false}
        handleDisplayDrawer={handleDisplayDrawer}
        />
      );
  
      component.find('.menuItem').simulate('click');
      expect(handleDisplayDrawer).toHaveBeenCalled();
  
      jest.restoreAllMocks();
    });
  
   
  });

});
