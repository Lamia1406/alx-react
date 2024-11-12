import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';
describe('BodySectionWithMarginBottom component', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  it('renders without crashing', () => {
    let component = shallow(<BodySectionWithMarginBottom />);
    expect(component).toBeDefined();
  });
  it('renders a BodySection component with correct props', () => {
    const title = 'Test Title';
    const children = <p>Test Children Content</p>;

    const component = shallow(
      <BodySectionWithMarginBottom title={title}>
        {children}
      </BodySectionWithMarginBottom>
    );
    const bodySection = component.find(BodySection);
    expect(bodySection.exists()).toBe(true);
    expect(bodySection.prop('title')).toEqual(title);
    expect(bodySection.contains(children)).toBe(true);
  });
 

  

  

  

});
