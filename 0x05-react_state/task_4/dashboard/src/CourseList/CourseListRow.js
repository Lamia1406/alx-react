import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [checked, setChecked] = useState(false);

  const rowStyle = checked
    ? styles.checkedRow
    : isHeader
    ? styles.headerRow
    : styles.defaultRow;

  return (
    <tr className={css(rowStyle)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2} className={css(styles.headerCell)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles.headerCell)}>{textFirstCell}</th>
            <th className={css(styles.headerCell)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            {textFirstCell}
          </td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

const styles = StyleSheet.create({
  defaultRow: {
    backgroundColor: "#f5f5f5ab",
  },
  headerRow: {
    backgroundColor: "#deb5b545",
  },
  checkedRow: {
    backgroundColor: "#e6e4e4",
  },
  headerCell: {
    padding: "4px 0",
    borderBottom: "2px solid rgb(209, 209, 209)",
  },
});
