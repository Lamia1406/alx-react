import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, css} from "aphrodite";
export default function NotificationItem({ type, html, value, markAsRead, id}) {
  if (html) {
    return <li data-notification-type={type} className={type === "urgent" ? css(NotificationItemStyle.urgentNotification): css(NotificationItemStyle.defaultNotification)} dangerouslySetInnerHTML={{__html: html}} onClick={() => markAsRead(id)}></li>;
  } else {
    return <li data-notification-type={type} className={type === "urgent" ? css(NotificationItemStyle.urgentNotification): css(NotificationItemStyle.defaultNotification)} onClick={() => markAsRead(id)}>{value}</li>;
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.string,
  id: PropTypes.number,
  value: PropTypes.string,
  markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  type: "default",
  html: null,
  value: null,
  markAsRead: () => {

  }
};

const NotificationItemStyle = StyleSheet.create({
  urgentNotification: {
    color: "red",
     '@media (max-width: 900px)': {
      borderBottom: "2px solid black",
      padding: "10px 12px",
      listStyle: "none",
     },

  },
  defaultNotification: {
    color: "blue",
    '@media (max-width: 900px)': {
      borderBottom: "2px solid black",
      padding: "10px 12px",
      listStyle: "none",
     },
  }
})