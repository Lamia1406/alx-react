import './Login.css';
import React from 'react';
function Login() {
  return (
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

  );
}

export default Login;
