import React from 'react';
import './App.css';
import FoodsNav from './components/FoodsNav/FoodsNav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FoodDetail from './components/FoodDetail/FoodDetail';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <FoodsNav></FoodsNav>
          </Route>
          <Route path="/food/:foodKey">
            <FoodDetail></FoodDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
