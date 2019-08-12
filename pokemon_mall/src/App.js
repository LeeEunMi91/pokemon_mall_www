import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './pokemon_mall/Header';
import Home from './pokemon_mall/Home';
import Login from './pokemon_mall/Login';
import ItemDetail from './pokemon_mall/ItemDetail';
import CategotyItems from './pokemon_mall/CategoryItems';
import Footer from './pokemon_mall/Footer';
import MyItems from './pokemon_mall/MyItem';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/categories/:categoryId" component={CategotyItems} />
          <Route exact path="/items/:itemId" component={ItemDetail} />
          <Route exact path="/me/items" component={MyItems} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


