import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import ShoppingList from './components/shopping-list';
import RecipeList from './components/recipe-list';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/lists" component={ShoppingList} />
            <Route path="/recipes" component={RecipeList} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
