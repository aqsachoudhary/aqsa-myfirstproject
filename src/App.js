import { useState, useEffect } from "react";

import { Switch, Router, Route } from "react-router-dom";

import "./App.css";
import Counter from "./modules/Counter";
import Todo from "./modules/Todo";
import Users from "./modules/Users/Users";
import Posts from "./modules/Post/Post";
import Login from "./modules/Login";
import SignUp from "./modules/SignUp";
import Information from "./modules/Information";
import Assignment from "./modules/Assignment";
import MainLayOut from "./components/MainLayOut";
import Products from "./modules/Product/Products";
import ProductForm from "./modules/Product/components/ProductForm";
import Clients from "./modules/Clients/Clients";
import ClientsForm from "./modules/Clients/components/ClientsForm";
import history from "./@history";
import Home from "./modules/Home/Home";
import UserForm from "./modules/Users/components/UserForm";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <MainLayOut>
          <Route exact path="/Information" component={Information} />
          <Route exact path="/Assignment" component={Assignment} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/Todo" component={Todo} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/new" component={UserForm} />
          <Route exact path="/users/users-details/:id" component={UserForm} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/product/new" component={ProductForm} />
          <Route
            exact
            path="/product/product-details/:id"
            component={ProductForm}
          />
          <Route exact path="/clients" component={Clients} />
          <Route exact path="/clients/new" component={ClientsForm} />
          <Route
            exact
            path="/clients/clients-details/:id"
            component={ClientsForm}
          />

          <Route exact path="/" component={Home} />
        </MainLayOut>
      </Switch>
    </Router>
  );
};

export default App;
