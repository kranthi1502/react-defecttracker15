import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Link,Route} from 'react-router-dom';

export default class Login extends React.Component{
constructor(){
  super();
  this.state={
    Username:"",
    Password:"",
    type:""
   
  };
}
handleChange=({target:{name,value}})=>{
  this.setState({[name]:value});

 console.log(this.state);
}
handleSubmit=e=>{
  e.preventDefault();
  console.log(this.props);
 //this.setState(e.target.name=e.target.name.value)
  console.log(this.state)
  if(this.state.Username.length==0 || this.state.Password.length==0){
    alert('Please enter username or password');
  }
  else{
   this.props.history.replace("/defect/"+this.state.type);
  }
}
render(){
  return(
    <div className="container">
      <div className="title">
      <h3 className="text-center mt-3 border">Defect Tracker</h3>
      <form onSubmit={this.handleSubmit}>
      <div className="container-fluid col-md-4 col-sm-4 text-center border">
       <label><b>UserName </b></label><br></br>
      <input type='text'
      name='Username'
      value={this.state.Username}
      onChange={this.handleChange}
/>
<br></br>
 <label><b>Password </b></label><br></br>
      <input type='password'
      name='Password'
      value={this.state.Password}
      onChange={this.handleChange}
/>
<div className="text-center mt-3">
<button type='submit'
name='type'
value="Dev"
onClick={({target:{name,value}})=>{
  this.setState({[name]:value})
}}
 className='btn btn-danger'>Sign In As Dev</button>
<button type='submit'
name='type'
value="Tester"
onClick={({target:{name,value}})=>{
  this.setState({[name]:value})
}}
className='btn btn-warning'>Sign In As Tester</button>
</div>
      </div>
      </form>
      </div>
    </div>
  )
}
}
