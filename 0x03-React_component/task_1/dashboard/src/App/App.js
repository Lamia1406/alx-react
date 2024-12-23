import React from 'react';
import Notifications from "../Notifications/Notifications"
import Login from "../Login/Login"
import Footer from "../Footer/Footer"
import PropTypes from 'prop-types';
import Header from "../Header/Header"
import "./App.css"
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
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
                <CourseList listCourses={listCourses}/> : 
                <Login/>
                }
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