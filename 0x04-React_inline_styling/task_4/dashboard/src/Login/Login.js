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
          <button className={css(LoginStyle.button)}>OK</button>
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
    '@media (max-width: 900px)': {
        flexDirection: "column",
        gap: "0"
      },
},
formField: {
  display: "flex",
      gap: "12px",
      alignItems: "center",
      
      
},
input: {
  padding: "2px 8px",
  borderRadius: 0,
  border: "1px solid grey",
  '@media (max-width: 900px)': {
    border: "none",
  },
},
button: {
  padding: "2px 8px",
  border: "1px solid gray",
  borderRadius: "4px",
  backgroundColor: "white",
  '@media (max-width: 900px)': {
      //  border: "3px solid orange",
       boxShadow: "0 0 2px 2px orange",
       border: "none",
       borderRadius: 0
      },
":hover": {
  backgroundColor: "gray",
      color: "white",
      transition: "ease-out 300ms",
}
}


})