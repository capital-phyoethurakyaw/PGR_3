import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.5.0";
import "assets/css/demo.css";

import AdminLayout from "layouts/Admin.js";
// import store from "Store/Action"
import reportWebVitals from "./reportWebVitals"; 
import store from "./Store/Reducer";
import { Provider } from "react-redux";
 
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>

  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect to="/admin/loginpage" />
    </Switch>
  </BrowserRouter> 
   </Provider>
  </React.StrictMode>,
  document.getElementById("root")

   
);
reportWebVitals();
