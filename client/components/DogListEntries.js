import React, { Component } from 'react'
import axios from 'axios'
import clickDogAction from '../actions/clickDogActions.js'
import { connect } from 'react-redux'

class DogListEntries extends Component{
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(dog){
		axios.get(`https://dog.ceo/api/breed/${dog}/images`)
		.then(({data}) =>{
			console.log(data, 'data from get dog images')
			this.props.actions({dogName:dog, imageUrls: data.message})
		})
		.catch(err =>{
			console.log(err, 'err from get dog images')
		})
	}

	render(){
		return (
			<div>
				<a className="dogListEntry" onClick={()=>{this.handleClick(this.props.dog)}}> {this.props.dog} </a>
			</div>
		)
	}
}

const dogDispatch = (dispatch) =>{
  return {
    actions: (info) => dispatch(clickDogAction(info))
  }
}

export default connect(null, dogDispatch)(DogListEntries)

