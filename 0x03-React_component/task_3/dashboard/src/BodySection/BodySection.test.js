import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection component', () => {
  it('renders without crashing', () => {
    let component = shallow(<BodySection />);
    expect(component).toBeDefined();
  });
  it('render correctly the children and one h2 element', () => {
    let component = shallow(<BodySection title="test title">
        <p>test children node</p>
      </BodySection>);
    expect(component.find('h2').text()).toEqual('test title');
    expect(component.contains(<p>test children node</p>)).toBe(true);
  });

  

  

  

});
