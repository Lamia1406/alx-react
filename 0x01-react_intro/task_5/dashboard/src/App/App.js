import React from "react"
import logo from "../assets/holberton-logo.jpg";
import './App.css';
import { getFooterCopy, getFullYear } from '../utils/utils';
function App() {
  return (
    <div className='App-main'>
      <div className='App-header'>
        <img src={logo} alt='Holberton Logo' />
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <form>
          <div className='form-field'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email'  />
          </div>
          <div className='form-field'>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password'  />
          </div>
          <div className='form-submit'>
          <button>OK</button>
          </div>
        
          
  
        
            
         
        </form>
      </div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>

  );
}

export default App;