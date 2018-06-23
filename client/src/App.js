import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import SavedArticles from './components/SavedArticles';
import SearchForArticles from './SearchForArticles';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={SearchForArticles} />
        <Route exact path="/saved" component={SavedArticles} />
        <Route component={SearchForArticles} />
      </Switch>
    </div>
  </Router>
);

export default App;
