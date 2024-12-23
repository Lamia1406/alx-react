import React from "react";
import PropTypes from "prop-types";

export default function NotificationItem({ type, html, value }) {
  if (html) {
    return <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>;
  } else {
    return <li data-notification-type={type}>{value}</li>;
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: "default",
  html: null,
  value: null
};
