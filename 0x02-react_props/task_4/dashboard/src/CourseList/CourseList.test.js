import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList component tests', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CourseList />);
  });

  it('renders without crashing', () => {
    expect(component).toBeDefined();
  });
  it('renders 5 different rows', () => {
    const rows = component.find(CourseListRow);
    expect(rows).toHaveLength(5);
})
});
