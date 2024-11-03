import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
    let component;

    beforeEach(() => {
      component = shallow(<NotificationItem />);
    });
    it('renders without crashing', () => {
                expect(component).toBeDefined();
    });
    it('renders the correct HTML with type and value props', () => {
        const component = shallow(<NotificationItem type="default" value="test" />);
        expect(component.type()).toBe('li');
        expect(component.text()).toContain('test');
      });
      it('renders the correct HTML with html prop', () => {
        const htmlContent = { __html: '<u>test</u>' };
        const component = shallow(<NotificationItem html={htmlContent} />);
        expect(component.type()).toBe('li');
        expect(component.html()).toContain('<u>test</u>');
      });
     
})


