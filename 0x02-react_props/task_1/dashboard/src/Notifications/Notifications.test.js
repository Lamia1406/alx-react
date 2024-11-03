import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe('Notifications Component', () => {
    let component;

    beforeEach(() => {
      component = shallow(<Notifications />);
    });
    it('renders without crashing', () => {
                expect(component).toBeDefined();
    });
    it('renders unordered list', () => {

                expect(component.find('ul')).toBeDefined();
    });
    it('renders three list items', () => {
                expect(component.find('li')).toHaveLength(3);
    });
    it('renders the text Here is the list of notifications', () => {

        expect(component.find('p').text()).toBe(
            "Here is the list of notifications"
    );
    });
})
