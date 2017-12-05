import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="fixed-top" style={{backgroundColor: 'white'}}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <span className="navbar-brand mb-0">
              <Link to='/' className="nav-link">
                <span style={{fontfamily: 'Helvetica'}}>DogLog</span>
              </Link>
            </span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/favoriteDogs" className="nav-link">Favorite Dogs</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav;