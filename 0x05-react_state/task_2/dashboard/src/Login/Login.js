import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email:"",
      password: "",
      enableSubmit: false
    }
  }
  handleLoginSubmit = (e) => {
    e.preventDefault()
    this.props.logIn()
   
}
handleChangeEmail = (e) =>{
  this.setState({email: e.target.value})
  if (this.state.email != "" && this.state.password != "") {
    this.setState({enableSubmit: true})
  }
}
handleChangePassword = (e) =>{
  this.setState({password: e.target.value})
  if (this.state.email != "" && this.state.password != "") {
    this.setState({enableSubmit: true})
  }

}
  render () {
    return (
      <div className='login'>
        <p>Login to access the full dashboard</p>
        <form className={css(LoginStyle.form)} onSubmit={(e) => this.handleLoginSubmit(e)}>
          <div className={css(LoginStyle.formField)}>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' value={this.state.email} className={css(LoginStyle.input)} onChange={(e)=> this.handleChangeEmail(e)}/>
          </div>
          <div className={css(LoginStyle.formField)}>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' value={this.state.password} className={css(LoginStyle.input)} onChange={(e)=> this.handleChangePassword(e)}/>
          </div>
          <div className='form-submit'>
            <input type='submit' value={"OK"} disabled={this.state.enableSubmit === false} className={css(LoginStyle.button)} />
          
          </div>
        
          
  
        
            
         
        </form>
      </div>

  );
  }
}

Login.propTypes = {
	logIn: PropTypes.func,
};
Login.defaultProps = {
  logIn: () => {
    
  }
}
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