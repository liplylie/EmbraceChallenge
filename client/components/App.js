import React, { Component } from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
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
      <BrowserRouter>
        <div className="main">
          <Nav />
          <div style={{display: 'flex'}}>
          <SideNav />
            <Switch>
              <Route exact path="/" component={DefaultHome} />
              <Route exact path="/dog/:dog" component={() => (<DogView dogInfo={this.props.dogInfo}/>)} /> />
              <Route exact path="/favoriteDogs" component={FavoriteDogs} />
              <Route render={function() {
                return (
                  <div className='fourofour-section'>
                    <p className='fourofour-status'>404</p>
                    <p className='fourofour-description'>PAGE NOT FOUND!</p>
                  </div>
                  )
              }} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
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