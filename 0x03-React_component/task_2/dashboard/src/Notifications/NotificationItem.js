import React from "react";
import PropTypes from "prop-types";

export default function NotificationItem({id, type, html, value, markAsRead }) {
  if (html) {
    return <li data-notification-type={type} dangerouslySetInnerHTML={{__html: html}} onClick={()=> markAsRead(id)}></li>;
  } else {
    return <li data-notification-type={type} onClick={()=> markAsRead(id)}>{value}</li>;
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string.isRequired,
  html: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  type: "default",
  html: null,
  value: null
};
