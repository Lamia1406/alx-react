import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe('Notifications tests', () => {
	it('renders without crashing', () => {
		const component = shallow(<Notifications />);

		expect(component).toBeDefined();
	});
	it('renders unordered list', () => {
		const component = shallow(<Notifications />);

		expect(component.find('ul')).toBeDefined();
	});
	it('renders three list items', () => {
		const component = shallow(<Notifications />);

		expect(component.find('li')).toHaveLength(3);
	});
	it('renders the text Here is the list of notifications', () => {
		const component = shallow(<Notifications />);

		expect(component.find('p').text()).toBe(
            "Here is the list of notifications"
        );
	});
});