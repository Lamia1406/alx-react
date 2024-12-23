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

		expect(component.find('thead').children()).toHaveLength(2);
		component.find('thead').forEach((node) => {
			expect(
				node.equals(
					<CourseListRow
						textFirstCell='Course name'
						textSecondCell='Credit'
						isHeader={true}
					/>
				)
			);
		});

		expect(component.find('tbody').children()).toHaveLength(3);
		expect(component.find('tbody').childAt(0).html()).toEqual(
			"<tr style=\"background-color:#f5f5f5ab\" class=\"\"><td>ES6</td><td>60</td></tr>"
		);
		expect(component.find('tbody').childAt(1).html()).toEqual(
			"<tr style=\"background-color:#f5f5f5ab\" class=\"\"><td>Webpack</td><td>20</td></tr>"
		);
		expect(component.find('tbody').childAt(2).html()).toEqual(
			'<tr style=\"background-color:#f5f5f5ab\" class=\"\"><td>React</td><td>40</td></tr>'
		);
	});
});
