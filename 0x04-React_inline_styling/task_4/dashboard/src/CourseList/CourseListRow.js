import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
export default function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
  const rowStyle = {
    backgroundColor: "#f5f5f5ab"
  }
  const headerStyle = {
    backgroundColor: "#deb5b545"
  }
    return <tr style={rowStyle} className={isHeader ? css(CourseListRowStyle.headerRow): ""}>
        {
            isHeader ? (
                textSecondCell === null ? <th colSpan={2}
                style={headerStyle}>
                    {textFirstCell}
                </th>: <>
                <th>{textFirstCell}
                </th>
                <th>{textSecondCell}
                </th>
                </>
            ):
          <>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
          </>
        }
    </tr> 

}
CourseListRow.propTypes = {
	isHeader: PropTypes.bool,
	textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
};

CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null,
};
const CourseListRowStyle = StyleSheet.create({

headerRow: {
    padding: "4px 0",
    borderBottom: "2px solid rgb(209, 209, 209)",
},
})