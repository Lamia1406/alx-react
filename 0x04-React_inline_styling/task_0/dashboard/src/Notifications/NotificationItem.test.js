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
        const htmlContent = { __html: '<u>test</u>' };
        const component = shallow(<NotificationItem html={htmlContent} type='urgent' />);
        expect(component.type()).toBe('li');
        expect(component.html()).toContain('<li data-notification-type=\"urgent\">[object Object]</li>');
    });
});
