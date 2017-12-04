import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import DogListEntry from './DogListEntries.js'

class SideNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
    	dogs: []
    }
  }

  componentDidMount(){
  	let that = this
  	axios.get('https://dog.ceo/api/breeds/list/all')
  		.then(function ({data}) {
		    console.log(data, 'response list all')
		    for ( let dog in data.message){
		    	that.setState({
		    	dogs: [...that.state.dogs, dog]
		    	})
		    }
		  })
		  .catch(function (error) {
		    console.log(error, 'error list all')
		  });
  }

  render() {
  	if (this.state.dogs.length === 0) {
  		return (
  			<div style={{flex:1.5, backgroundColor: "#FFF0F5", minHeight: '100vh', overflowY: 'scroll', minWidth: '10em',paddingTop: '4.5em', paddingLeft: '.5em'}}>
  				<div className="loader"></div>
  			</div>
  		)
  	} else {
    return (
      <div style={{flex:1.5, backgroundColor: "#FFF0F5", maxHeight: '100vh', overflowY: 'scroll', minWidth: '10em',paddingTop: '4.5em', paddingLeft: '.5em'}}>
        {this.state.dogs.map((dog,i) => {
        	return <DogListEntry key={i} dog={dog}/>
        })}  
			</div>
		)     
	}
}
}


export default SideNav;