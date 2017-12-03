import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './Nav.js';
import Home from './Home.js';
import FavoriteDogs from './FavoriteDogs.js';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="main">
          <Nav />
            <Route exact path="/" component={Home} />
            <Route exact path="/favoriteDogs" component={FavoriteDogs} />
        </div>
      </Router>
    )
  }
}

export default App;