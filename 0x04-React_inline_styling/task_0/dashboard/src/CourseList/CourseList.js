import CourseListRow from "./CourseListRow";
import React from "react";
import "./CourseList.css"
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";
export default function CourseList({listCourses}){
    return <table id="CourseList">
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