import React from "react"
import PropTypes from "prop-types"
export default function NotificationItem({type, html, value}){
    return <li data-notification-type={type} dangerouslySetInnerHTML={html}>{value}</li>
}
NotificationItem.propTypes = {
	__html: PropTypes.shape({
		html: PropTypes.string,
	}),
    type: PropTypes.string.isRequired,
	value: PropTypes.string,
};

NotificationItem.defaultProps = {
	type: "default",
};