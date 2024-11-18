import logo from './holberton-logo.jpg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';
class Header extends React.Component{
  render() {
    const {user, logOut} = this.context
    return (
      <header className={css(HeaderStyle.Header)}>
        <img src={logo} alt='Holberton Logo' className={css(HeaderStyle.img)} />
        <h1 className={css(HeaderStyle.h1)}>School dashboard</h1>
        {
          user.isLoggedIn && <p id='logoutSection'>Welcome {user.email}
          <a onClick={logOut}>(logout)</a></p>
        }
      </header>

  );
  }
}
Header.contextType = AppContext

const HeaderStyle = StyleSheet.create({
  Header: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
},
  img: {
    width: "200px",
    height: "auto"
  },
  h1: {
    fontSize:"2rem",
    color: "#E0354B",
  }
})
export default Header;
