import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FavoriteDogs extends Component {
  constructor(props) {
    super(props);
  }
  render(){
  	return(
  		<div className="row" style={{paddingTop: 40, height: '100vh', backgroundColor: 'lightpink'}}>
          <div className="col align-self-center" style={{textAlign: 'center'}}>
            <p>FavoriteDogs</p>
          </div>
  		</div>
  			

  	)
  }
}

export default FavoriteDogs