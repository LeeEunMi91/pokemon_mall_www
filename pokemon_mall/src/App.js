import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './pokemon_mall/Header';
import Footer from './pokemon_mall/Footer';
import Home from './pokemon_mall/Home';
import Login from './pokemon_mall/Login';
import ItemDetail from './pokemon_mall/ItemDetail';
import MyItems from './pokemon_mall/MyItems';
import CategoryItems from './pokemon_mall/CategoryItems';
import CartItems from './pokemon_mall/CartItems';
import ObserverTest from './observer/ObserverTest';
import Join from './pokemon_mall/Join';
import Siede from './pokemon_mall/Siede';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/items/:itemId" component={ItemDetail} />
          <Route exact path="/me/items" component={MyItems} />
          <Route exact path="/categories/:categoryId" component={CategoryItems} />
          <Route exact path="/cart/items" component={CartItems} />
          <Route exact path="/observer-test" component={ObserverTest} />
        </Switch>
        <Siede />
        <Footer />
      </div>
    </Router>
  );
}

export default App;