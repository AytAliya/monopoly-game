import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Main from './pages/Main';
import Board from './pages/Board';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Main}/>
        <Route path="/game" exact={true} component={Board}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
