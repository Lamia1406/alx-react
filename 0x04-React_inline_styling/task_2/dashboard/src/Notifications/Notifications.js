import React from "react";
import NotificationItemShape from "./NotificationItemShape";
import closeIcon from "./close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import {StyleSheet, css} from "aphrodite"
export default function Notifications({ displayDrawer, listNotifications }) {
  return (
    <div>
      <div className={`${css(NotificationsStyle.menuItem)} menuItem`}>
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className={`${css(NotificationsStyle.Notifications)} Notifications`}>
          <button className={css(NotificationsStyle.closeIcon)}
            style={{ float: "right" }}
            aria-label="Close"
            onClick={() => console.log("Close button has been clicked")}
          >
            <img src={closeIcon} alt="Close Icon" className={css(NotificationsStyle.closeIconImg)}/>
          </button>
          <p>Here is the list of notifications</p>
          <ul className={css(NotificationsStyle.notificationsList)}>
            {listNotifications.length === 0 ? (
              <NotificationItem value="No new notification for now" />
            ) : (
              listNotifications.map((notification) => (
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
      )}
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

const NotificationsStyle = StyleSheet.create({
  Notifications: {
    border: "2px dashed #E0354B",
    padding: "24px 8px",
},
menuItem: {
    textAlign: "right"
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
}
})