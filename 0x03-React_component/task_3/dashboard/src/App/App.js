import React from 'react';
import Notifications from "../Notifications/Notifications"
import Login from "../Login/Login"
import Footer from "../Footer/Footer"
import PropTypes from 'prop-types';
import Header from "../Header/Header"
import "./App.css"
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
export default class App extends React.Component{
    handleLogout = (e) => {
        if (e.ctrlKey && e.key === 'h') {
            e.preventDefault();
            alert('Logging you out');
            this.props.logOut();
        }
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleLogout
        )
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleLogout);
    }
    render() {
        const listCourses = [
            {
                "id": 1,
                "name": "ES6",
                "credit": 60
            },
            {
                "id": 2,
                "name": "Webpack",
                "credit": 20
            },
            {
                "id": 3,
                "name": "React",
                "credit": 40
            },
        ]
        const listNotifications = [
            { 
                "id": 1,
                "type": 'default', 
                "value": 'New course available'
            },
            { 
                "id": 2, 
                "type": 'urgent', 
                "value": 'New resume available' 
            },
            { 
                "id": 3, 
                "type": 'urgent', 
                "__html": getLatestNotification() 
            },
        ];  
        return  <React.Fragment>
            <Notifications displayDrawer listNotifications={listNotifications}/>
             <div className='App'>
                <Header/>
             
                {
                this.props.isLoggedIn === true ? 
                <BodySectionWithMarginBottom title={"Course list"}>
                    <CourseList listCourses={listCourses}/>
                </BodySectionWithMarginBottom>: 
                <BodySectionWithMarginBottom title={"Log in to continue"}>
                    <Login/>
                </BodySectionWithMarginBottom>
                }
                <BodySection title="News from the School">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis urna at sem viverra, at ullamcorper justo fermentum. Morbi tincidunt, sapien non volutpat luctus, elit arcu feugiat felis, id vestibulum lorem magna at eros. Integer ultricies urna nec turpis posuere, quis bibendum ligula elementum. Nam gravida libero quis ipsum convallis, ac sagittis lacus eleifend. Fusce blandit velit ut purus congue, ac gravida lacus finibus. Nulla facilisi. Vestibulum euismod tortor non justo tristique dapibus. Cras euismod leo a sem bibendum, sed auctor urna laoreet. Proin luctus, mi et varius hendrerit, augue enim vehicula lacus, et sodales est felis vel metus.</p>
                </BodySection>
                <Footer/>
      </div>
        </React.Fragment>
    }
}
App.propTypes = {
	isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func
};

App.defaultProps = {
	isLoggedIn: false,
    logOut: () => {
    }
};