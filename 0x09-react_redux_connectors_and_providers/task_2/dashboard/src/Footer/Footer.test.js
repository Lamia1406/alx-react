import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const mockReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(mockReducer);

describe('Basic React Tests - <Footer />', function() {
  it('Should render without crashing', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    expect(wrapper.exists()).toBeTruthy();
  });


});
