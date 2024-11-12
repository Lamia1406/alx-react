import React from "react";
import BodySection from "./BodySection";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';
export default function BodySectionWithMarginBottom({title, children}) {
    return <div className={css(BodySectionWithMarginBottomStyle.BodySectionWithMargin)}>
        <BodySection title={title}>
            {children}
        </BodySection>
    </div>
}
BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node
};
const BodySectionWithMarginBottomStyle = StyleSheet.create({
    BodySectionWithMargin: {
        marginBottom: "40px"
    }
})