import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow component tests', () => {

  it('renders without crashing', () => {
    const component = shallow(<CourseListRow textFirstCell='test'/>);
    expect(component).toBeDefined();
  });
  it('When isHeader is true: renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const component = shallow(
        <CourseListRow
            isHeader={true}
            textFirstCell='test'
            textSecondCell={null}
        />
    );

    expect(component.find('tr').children()).toHaveLength(1);
    expect(component.find('tr').childAt(0).html()).toEqual(
        '<th colSpan="2">test</th>'
    );
});

it('When isHeader is true: renders two cells when textSecondCell is present', () => {
    const component = shallow(
        <CourseListRow
            isHeader={true}
            textFirstCell='test'
            textSecondCell='test'
        />
    );

    expect(component.find('tr').children()).toHaveLength(2);
    expect(component.find('tr').childAt(0).html()).toEqual('<th>test</th>');
    expect(component.find('tr').childAt(1).html()).toEqual('<th>test</th>');
});
it('When isHeader is false: renders two cells when textSecondCell is present', () => {
    const component = shallow(
        <CourseListRow
            isHeader={false}
            textFirstCell='test'
            textSecondCell='test'
        />
    );

    expect(component.find('tr').children()).toHaveLength(2);
    expect(component.find('tr').childAt(0).html()).toEqual('<td>test</td>');
    expect(component.find('tr').childAt(1).html()).toEqual('<td>test</td>');
});
});
