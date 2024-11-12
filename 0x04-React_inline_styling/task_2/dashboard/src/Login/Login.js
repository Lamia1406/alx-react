import React from 'react';
import { StyleSheet, css } from 'aphrodite';
function Login() {
  return (
      <div className='login'>
        <p>Login to access the full dashboard</p>
        <form className={css(LoginStyle.form)}>
          <div className={css(LoginStyle.formField)}>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' className={css(LoginStyle.input)} />
          </div>
          <div className={css(LoginStyle.formField)}>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password'  className={css(LoginStyle.input)} />
          </div>
          <div className='form-submit'>
          <button className='button'>OK</button>
          </div>
        
          
  
        
            
         
        </form>
      </div>

  );
}

export default Login;

const LoginStyle = StyleSheet.create({
  form : {
    display: "flex",
    gap: "12px",
    padding: "16px 0",
},
formField: {
  display: "flex",
      gap: "12px",
      alignItems: "center"
},
input: {
  padding: "2px 8px",
  borderRadius: 0,
  border: "1px solid grey"
},
button: {
  padding: "2px 8px",
  border: "1px solid gray",
  borderRadius: "4px",
  backgroundColor: "white",
":hover": {
  backgroundColor: "gray",
      color: "white",
      transition: "ease-out 300ms",
}
}


})