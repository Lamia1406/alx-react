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
    it('contains the NotificationItem component(s)', () => {
      expect(component.find(NotificationItem).length).toBeGreaterThan(0);
    });
    it('renders unordered list', () => {

                expect(component.find('ul')).toBeDefined();
    });
    it('renders correct list items', () => {
      expect(component.find('ul').children()).toHaveLength(3);
      expect(component.find('ul').childAt(0).html()).toEqual(
        '<li data-notification-type="default">New course available</li>'
      );
      expect(component.find('ul').childAt(1).html()).toEqual(
        '<li data-notification-type="urgent">New resume available</li>'
      );
      expect(component.find('ul').childAt(2).html()).toEqual(
        `<li data-notification-type=\"urgent\">${getLatestNotification()}</li>`
      );
    });
    it('renders the text Here is the list of notifications', () => {

        expect(component.find('p').text()).toBe(
            "Here is the list of notifications"
    );
    });
})
