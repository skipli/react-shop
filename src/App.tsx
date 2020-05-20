import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Cart from "./views/Cart";
import "./index.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
