import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import {StyleSheetTestUtils} from "aphrodite"
describe('NotificationItem Component', () => {
    beforeAll(() => {
        StyleSheetTestUtils.suppressStyleInjection();
      });
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
        expect(component.html()).toMatch(/^<li[^>]*data-notification-type="urgent"[^>]*><u>test<\/u><\/li>$/);

    });
});
