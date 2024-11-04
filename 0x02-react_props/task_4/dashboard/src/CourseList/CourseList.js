import CourseListRow from "./CourseListRow";
import React from "react";
import "./CourseList.css"
export default function CourseList(){
    return <table id="CourseList">
        <thead>
            <CourseListRow textFirstCell={"Available courses"} isHeader/>
            <CourseListRow textFirstCell={"Course name"} textSecondCell={"Credit"} isHeader/>
        </thead>
        <tbody>
            <CourseListRow textFirstCell={"ES6"} textSecondCell={"60"} isHeader={false}/>
            <CourseListRow textFirstCell={"Webpack"} textSecondCell={"20"} isHeader={false}/>
            <CourseListRow textFirstCell={"React"} textSecondCell={"40"} isHeader={false}/>
        </tbody>
    </table>
}