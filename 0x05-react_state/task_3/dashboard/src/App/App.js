import React from 'react';
import Notifications from "../Notifications/Notifications"
import Login from "../Login/Login"
import Footer from "../Footer/Footer"
import PropTypes from 'prop-types';
import Header from "../Header/Header"
import { StyleSheet, css } from 'aphrodite';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import AppContext, { user } from './AppContext';
export default class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            displayDrawer : false,
            user: user,
            listNotifications: [
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
            ],
            logOut: this.logOut
        }
    }
    markNotificationAsRead = (id) => {
        this.setState({
            listNotifications: this.state.listNotifications.filter(notification => notification.id !== id)
          });
    }
    logIn = (email, password) => {
        this.setState({
            user: {
                email: email,
                password: password,
                isLoggedIn: true
            }, 
        })
    }
    logOut = () => {
        this.setState({ user });
      }
    handleDisplayDrawer = () => {
        this.setState({displayDrawer: true}) 
    }
    handleHideDrawer = () =>{
        this.setState({displayDrawer: false})
    }
   
    keyboardKeys = (e) => {
        if (e.ctrlKey && e.key === 'h') {
            e.preventDefault();
            alert('Logging you out');
            this.state.logOut();
        }
    }
    componentDidMount() {
        document.addEventListener('keydown', this.keyboardKeys
        )
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.keyboardKeys);
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
        return  <AppContext.Provider value={{user: this.state.user, logOut: this.state.logOut}}>  
             <div className={css(appStyles.App)}>
                <div className={css(appStyles.AppHeader)}>
                <Header/>
                <Notifications displayDrawer={this.state.displayDrawer} handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer} listNotifications={this.state.listNotifications} markNotificationAsRead={this.markNotificationAsRead}/>
                </div>
                <div className={css(appStyles.AppBody)}>
                {
                this.state.user.isLoggedIn ?
                <BodySectionWithMarginBottom title={"Course list"}>
                    <CourseList listCourses={listCourses}/>
                </BodySectionWithMarginBottom>: 
                <BodySectionWithMarginBottom title={"Log in to continue"}>
                    <Login logIn={this.logIn}/>
                </BodySectionWithMarginBottom>
                }
                <BodySection title="News from the School">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis urna at sem viverra, at ullamcorper justo fermentum. Morbi tincidunt, sapien non volutpat luctus, elit arcu feugiat felis, id vestibulum lorem magna at eros. Integer ultricies urna nec turpis posuere, quis bibendum ligula elementum. Nam gravida libero quis ipsum convallis, ac sagittis lacus eleifend. Fusce blandit velit ut purus congue, ac gravida lacus finibus. Nulla facilisi. Vestibulum euismod tortor non justo tristique dapibus. Cras euismod leo a sem bibendum, sed auctor urna laoreet. Proin luctus, mi et varius hendrerit, augue enim vehicula lacus, et sodales est felis vel metus.</p>
                </BodySection>
                </div>
                <Footer/>
      </div>
        </AppContext.Provider>
    }
}



const appStyles = StyleSheet.create({
	App: {
		height: "100vh",
	},
    AppHeader: {
        display: "flex",
        gap: "4px",
        justifyContent: "space-between",
        borderBottom: "3px solid #E0354B",
      },
    AppBody: {
            padding: "48px",
            minHeight: "57%"  
    }
});