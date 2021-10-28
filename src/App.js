import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/Home';
import logo from './logo.svg';
import './css/App.css';
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

