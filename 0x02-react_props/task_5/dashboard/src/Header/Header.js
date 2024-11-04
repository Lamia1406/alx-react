import logo from './holberton-logo.jpg';
import React from 'react';
import './Header.css';
function Header() {
  return (
      <div className='App-header'>
        <img src={logo} alt='Holberton Logo' />
        <h1>School dashboard</h1>
      </div>

  );
}

export default Header;