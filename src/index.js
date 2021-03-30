import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './Login';
import App from "./App";
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Defect from './Defecttracker'

ReactDOM.render(
  <BrowserRouter>
  <Route exact path='/' component={Login}/>
  <Route path='/defect/:type' component={Defect}/>
  </BrowserRouter>,
document.getElementById("root"));
