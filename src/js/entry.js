import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Layout from "./components/Layout.js";
import Layout2 from "./components/Layout2.js";
import Layout3 from "./components/Layout3.js";


const app = document.getElementById('app');
ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path = "/" component = {Layout}>
    </Route>
    <Route path = "/L2" component = {Layout2}>
    </Route>
    <Route path = "/L3" component = {Layout3}>
    </Route>
  </Router>
  , app);
