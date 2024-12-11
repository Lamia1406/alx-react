import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import BodySection from '../BodySection/BodySection.js';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.js';
import Footer from '../Footer/Footer.js';
import CourseList from '../CourseList/CourseList.js';
import Notifications from '../Notifications/Notifications.js';
import { getLatestNotification } from '../utils/utils.js';
import { user, logOut } from './AppContext.js';
import AppContext from './AppContext.js';
import { connect } from "react-redux";
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators.js';
const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

const newlistNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.keyboardKeys = this.keyboardKeys.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.state = {
      user: user,
      logOut: this.logOut,
      listNotifications: newlistNotifications
    };
  }

  keyboardKeys(x) {
    if (x.key === 'h' && x.ctrlKey) {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true
      },
    });
  }

  logOut() {
    this.setState({ user: user });
  }

  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications.filter(notification => notification.id !== id)
    });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyboardKeys);
  }

  componentWillUnmount() {
    document.addEventListener('keydown', this.keyboardKeys);
  }

  render() {
    const { listNotifications } = this.state;
    const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;
  
    // Define the value for context
    const value = {
      user: this.state.user,
      logOut: this.logOut
    };
  
    return (
      <AppContext.Provider value={value}> {/* Here we pass the value */}
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={displayNotificationDrawer}
          handleHideDrawer={hideNotificationDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className={css(styles.App)}>
          <Header />
        </div>
        <div className={css(styles.AppBody)}>
          {
            isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )
          }
        </div>
        <BodySection title="News from the School">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </BodySection>
        <div className={css(styles.AppFooter)}>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
  
}

const styles = StyleSheet.create({
  App: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    margin: 0,
    padding: 0
  },

  AppBody: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    height: '60vh',
    margin: 0,
    padding: 0
  },

  AppFooter: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    margin: 0,
    padding: 0,
    height: '6vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '4px solid #e1354b',
    textAlign: 'center'
  },
});
export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get("isUserLoggedIn"),
    displayDrawer: state.get("isNotificationDrawerVisible"),
  };
};
const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};
App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
