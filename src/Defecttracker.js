import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Login from './Login'
import Viewdefects from './Viewdefect';
import AddDefect from './Adddefects';

export default class Defect extends React.Component{
     constructor(){
       super();
       this.state={
        defects:[
         {
          category: "UI",
          description: "submit button is not aligned properly",
          priority: 1,
          status: "open",
          changeStatus: "Close Defect"
        },
        {
          category: "Functional",
          description:
            "while submitting login user is not logged into application",
          priority: 2,
          status: "open",
          changeStatus: "Close Defect"
        }
      ]
       } }
        updateDefects = (category, description, priority) => {
    var newDefect = {
      category,
      description,
      priority,
      status: "open",
      changeStatus: "Close Defect"
    };
    console.log(newDefect);
    var defects = [...this.state.defects];
    console.log("defects is:" + defects);
    defects.push(newDefect);
    this.setState({ defects });
    console.log("hello");
  };
  logout=()=>{
     this.props.history.replace('/');
  }

  render(){
    console.log("props is:" + this.props.match.params.type);
    var {
      params:{type}
    }=this.props.match
    //console.log(this.props.link)
    return(
      <>
      <div className='text-center mt-3 border'>
      <h3>Defect Tracker</h3>
      <BrowserRouter>
       <Link to='/'><button onClick={this.logout}>Logout</button></Link><br></br>
      <div className='border'>
      
        <Link to='/adddefects'>
        <button className='border mr-4 text-center'
        disabled={type!=="Tester"}>
        Add-Defects
        </button></Link>
      <Link to='/viewdefects'>
      <button className='border ml-2 text-center'>
      Viewdefects
      </button></Link></div>
      
      <Route exact path='/adddefects' component={()=>(
      <AddDefect {...this.props}  updateDefects={this.updateDefects} />)}/>
     <Route exact path='/viewdefects' 
       component={() => (
                  <Viewdefects {...this.props} defects={this.state.defects}/>
                )}/>
      </BrowserRouter>
      </div>


      </>
    )
  }
}