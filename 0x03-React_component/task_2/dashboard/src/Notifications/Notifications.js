import React from "react";
import "./Notifications.css";
import NotificationItemShape from "./NotificationItemShape";
import closeIcon from "./close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

export default class Notifications extends React.Component{
  constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	}
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`)
  }
  render() {
    return (
      <div style={{ position: "absolute", right: "32px" }}>
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
        {this.props.displayDrawer && (
          <div className="Notifications">
            <button
              style={{ float: "right" }}
              aria-label="Close"
              onClick={() => console.log("Close button has been clicked")}
            >
              <img src={closeIcon} alt="Close Icon" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {this.props.listNotifications.length === 0 ? (
                <NotificationItem value="No new notification for now" />
              ) : (
                this.props.listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    id={notification.id}
                    type={notification.type}
                    html={notification.__html}
                    value={notification.value}
                    markAsRead = {this.markAsRead}
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
