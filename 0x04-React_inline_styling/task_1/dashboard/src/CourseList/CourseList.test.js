import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

describe('CourseList component tests', () => {
	beforeAll(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	let component;

	beforeEach(() => {
		component = shallow(<CourseList />);
	});

	it('renders without crashing', () => {
		expect(component).toBeDefined();
	});

	it('renders 5 different rows', () => {
		const listCourses = [
			{ id: 1, name: 'ES6', credit: 60 },
			{ id: 2, name: 'Webpack', credit: 20 },
			{ id: 3, name: 'React', credit: 40 },
		];
		const component = shallow(<CourseList listCourses={listCourses} />);

		// Check header rows
		expect(component.find('thead').children()).toHaveLength(2);
		component.find('thead').forEach((node, index) => {
			if (index === 1) {
				expect(
					node.equals(
						<CourseListRow textFirstCell={"Available courses"} isHeader/>
					)
				).toBeTruthy();
			} else if (index === 2) {
				expect(
					node.equals(
						<CourseListRow
							textFirstCell="Course name"
							textSecondCell="Credit"
							isHeader={true}
						/>
					)
				).toBeTruthy();
			}
		});

		// Check body rows
		expect(component.find('tbody').children()).toHaveLength(3);
		expect(component.find('tbody').childAt(0).html()).toMatch(
			/^<tr style="background-color:#f5f5f5ab"[^>]*><td>ES6<\/td><td>60<\/td><\/tr>$/
		);
		expect(component.find('tbody').childAt(1).html()).toMatch(
			/^<tr style="background-color:#f5f5f5ab"[^>]*><td>Webpack<\/td><td>20<\/td><\/tr>$/
		);
		expect(component.find('tbody').childAt(2).html()).toMatch(
			/^<tr style="background-color:#f5f5f5ab"[^>]*><td>React<\/td><td>40<\/td><\/tr>$/
		);
	});
});
