import React from 'react';
import Notifications from "../Notifications/Notifications"
import Login from "../Login/Login"
import Footer from "../Footer/Footer"
import PropTypes from 'prop-types';
import Header from "../Header/Header"
import "./App.css"
import CourseList from '../CourseList/CourseList';

export default function App({isLoggedIn}) {
    return  <React.Fragment>
        <Notifications/>
         <div className='App'>
            <Header/>
            {isLoggedIn=== true ? <CourseList/> : <Login/>}
            <Footer/>
  </div>
    </React.Fragment>
}
App.propTypes = {
	isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
	isLoggedIn: false,
};