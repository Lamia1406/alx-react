import React from 'react';
import Notifications from "../Notifications/Notifications"
import Login from "../Login/Login"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import "./App.css"

export default function App() {
    return  <React.Fragment>
        <Notifications/>
         <div className='App'>
            <Header/>
            <Login/>
            <Footer/>
  </div>
    </React.Fragment>
}