import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { Provider } from 'react-redux';
import Header from './Header.js';
import configureStore from 'redux-mock-store';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Basic React Tests - <Header />', function() {
  const mockStore = configureStore();
  const store = mockStore({
    isUserLoggedIn: false,
    isNotificationDrawerVisible: false,
  });

  it('Should render without crashing', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(wrapper.exists()).toBeTruthy();
  });
});
