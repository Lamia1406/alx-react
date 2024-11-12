import React from "react";
import BodySection from "./BodySection";
import "./BodySectionWithMarginBottom.css"
export default function BodySectionWithMarginBottom({title, children}) {
    return <div className="bodySectionWithMargin">
        <BodySection title={title}>
            {children}
        </BodySection>
    </div>
}
BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node
};