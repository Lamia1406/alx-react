import React from "react";
import NotificationItemShape from "./NotificationItemShape";
import closeIcon from "./close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import {StyleSheet, css} from "aphrodite"
export default class Notifications extends React.Component {
  shouldComponentUpdate(newProps) {
    return (
      newProps.displayDrawer !== this.props.displayDrawer
    );
  }
  render() {
    return (
      <div>
        {this.props.displayDrawer ? (
          <div className={`${css(NotificationsStyle.Notifications)} Notifications`}>
            <button className={css(NotificationsStyle.closeIcon)}
              style={{ float: "right" }}
              aria-label="Close"
              onClick={this.props.handleHideDrawer}
            >
              <img src={closeIcon} alt="Close Icon" className={css(NotificationsStyle.closeIconImg)}/>
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(NotificationsStyle.notificationsList)}>
              {this.props.listNotifications.length === 0 ? (
                <NotificationItem value="No new notification for now" />
              ) : (
                this.props.listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    html={notification.__html}
                    value={notification.value}
                  />
                ))
              )}
            </ul>
          </div>
        ):
        <div className={`${css(NotificationsStyle.menuItem)} menuItem`} onClick={this.props.handleDisplayDrawer}>
          <p>Your notifications</p>
        </div>
        }
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {

  },
  handleHideDrawer: () => {

  }
};

const opacity = {
  "0%": {
    opacity: 0.5,
  },
  "100%": {
    opacity: 1,
  },
};

const bounce = {
  "0%": {
    transform: "translateY(0)",
  },
  "50%": {
    transform: "translateY(-5px)",
  },
  "75%": {
    transform: "translateY(5px)",
  },
  "100%": {
    transform: "translateY(0)",
  },
}; 
const NotificationsStyle = StyleSheet.create({
  Notifications: {
    border: "2px dashed #E0354B",
    padding: "24px 8px",
    position: "fixed",
    right: "10px",
    '@media (max-width: 900px)': {
        height: "100vh",
        width: "100%",
        padding:"12px 0",
        border: "none",
        fontSize: "20px",
        position: "absolute",
        left: 0,
        top:0,
        zIndex: 999,
        background: "white",
      },
},
menuItem: {
    textAlign: "right",
    background: "#fff8f8",
    ":hover": {
			cursor: 'pointer',
			animationName: [opacity, bounce],
			animationDuration: '1s, 0.5s',
			animationIterationCount: 3
		}
},
closeIcon: {
  backgroundColor: "transparent",
  border: "none",
},
closeIconImg: {
  width: "12px",
  height: "12px",
},
notificationsList : {
    marginlLeft: "32px",
    marginTop: "16px",
    marginRight: "72px",
    '@media (max-width: 900px)': {
      margin: 0,
      padding: 0
      },
}
})
