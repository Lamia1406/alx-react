import CourseListRow from "./CourseListRow";
import React from "react";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";
import {StyleSheet, css} from "aphrodite"
export default function CourseList({listCourses}){
    return <table id="CourseList" className={css(styles.courseList)}>
        <thead>
            <CourseListRow textFirstCell={"Available courses"} isHeader/>
            <CourseListRow textFirstCell={"Course name"} textSecondCell={"Credit"} isHeader/>
        </thead>
        <tbody>
            {
                listCourses.length === 0 ? <CourseListRow textFirstCell="No course available yet"/>:
                listCourses.map((course) =>{
                   return  <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit}/>
                })
            }
        </tbody>
    </table>
}
CourseList.propTypes = {
	listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
	listCourses: [],
};
const styles = StyleSheet.create({
    courseList: {
        marginBottom: "20%",
        width: "calc(100% - 96px)", 
        border: "1px solid gray",
        borderCollapse: "collapse",
    },
    tableHeader: {
        textAlign: "left",
    },
    headerRow: {
        padding: "4px 0",
        borderBottom: "2px solid rgb(209, 209, 209)",
    },
});