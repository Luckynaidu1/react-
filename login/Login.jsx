import React, { Component } from 'react'
import './Login.css'
export default class Login extends Component {
  state={
    user:"",
    password:""
  }
   userHnadler=(e)=>{
    this.setState({user:e.target.value})
    console.log(e.target.value);
   }
   paswordHandler=(e)=>{
    this.setState({password:e.target.value})
    console.log(e.target.value)
   }
   subimtHandler=(e)=>{
    e.preventDefault()
   }
  render() {
    
    return (
      <div className='align'>
        <pre>{JSON.stringify(this.state)}</pre>
        {window.alert(this.state.password)}
       <form onSubmit={this.subimtHandler} >
        <div >
          <label>User name</label>
          <br></br>
         <input className='user' name='user' onChange={this.userHnadler} placeholder='user name baby' />
        </div>
        <div>
          <label>Pasword</label>
          <br></br>
            <input className='password' name='password' onChange={this.paswordHandler} placeholder='password'/>
        </div>
        <div>
          <input type='submit' className='buttonAlign'/>
        </div>
        </form>
      </div>
    )
  }
}
