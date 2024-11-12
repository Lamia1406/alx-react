import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
    it('renders without crashing', () => {
        const component = shallow(<NotificationItem />);
        expect(component).toBeDefined();
    });

    it('renders the correct HTML with type and value props', () => {
        const component = shallow(<NotificationItem type="default" value="test" />);
        expect(component.type()).toBe('li');
        expect(component.text()).toBe('test');
    });

    it('renders the correct HTML with html prop', () => {
        const htmlContent = '<u>test</u>' ;
        const component = shallow(<NotificationItem html={htmlContent} type='urgent' />);
        expect(component.type()).toBe('li');
        expect(component.html()).toContain('<li data-notification-type=\"urgent\"><u>test</u></li>');
    });
    it('should call markAsRead with the correct ID when clicked', () => {
        const markAsReadSpy = jest.fn();
        const component = shallow(
          <NotificationItem id={1} type="urgent" value="Test notification" markAsRead={markAsReadSpy} />
        );
        const notificationItem = component.find('li');
        notificationItem.simulate('click');
        expect(markAsReadSpy).toHaveBeenCalledWith(1);    
        expect(markAsReadSpy).toHaveBeenCalledTimes(1);
      });
});
