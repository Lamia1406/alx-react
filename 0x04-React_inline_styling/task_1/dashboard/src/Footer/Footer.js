import './Footer.css';
import React from 'react';

import { getFooterCopy, getFullYear } from '../utils/utils';
function Footer() {
  return ( 
      <div className='App-footer'>
        <p>Copyright 2024 - Holberton School</p>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
  );
}

export default Footer;
