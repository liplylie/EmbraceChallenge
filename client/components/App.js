import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Nav from './Nav.js';
import DogView from './DogView.js';
import FavoriteDogs from './FavoriteDogs.js';
import DefaultHome from './DefaultHome.js';
import SideNav from './SideNav.js'


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="main">
          <Nav />
          <div style={{display: 'flex'}}>
          <SideNav />
            <Switch>
              <Route exact path="/" component={DefaultHome} />
              <Route exact path="/dog/:dog" component={() => (<DogView dogInfo={this.props.dogInfo}/>)} /> />
              <Route exact path="/favoriteDogs" component={FavoriteDogs} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (store) => {
  console.log(store, 'dog store in app js')
  return {
    dogInfo: store.clickDog
  }
}

export default connect(mapStateToProps)(App)


// <Route exact path='/account' component={() => (<Dashboard sqlUser={this.state.sqlUser} passItems={this.state.allItems}/>)} />