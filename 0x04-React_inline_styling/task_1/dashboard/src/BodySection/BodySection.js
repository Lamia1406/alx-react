import React from "react"
import PropTypes from "prop-types";
export default function BodySection({title, children}) {
    return <div className="BodySection">
        <h2>{title}</h2>
        {children}
    </div>
}
BodySection.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node
};