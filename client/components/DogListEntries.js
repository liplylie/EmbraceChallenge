import React, { Component } from 'react'
import axios from 'axios'
import clickDogAction from '../actions/clickDogActions.js'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class DogListEntries extends Component{
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(dog){
		console.log(dog, 'handleClick dog')
		axios.get(`https://dog.ceo/api/breed/${dog}/images`)
		.then(({data}) =>{
			//console.log(data, 'data from get dog images')
			this.props.actions({dogName:dog, imageUrls: data.message})
		})
		.catch(err =>{
			console.log(err, 'err from get dog images')
		})
	}

	render(){
		return (
			<div>
				<Link to={`/dog/${this.props.dog}`} className="dogListEntry" onClick={()=>{this.handleClick(this.props.dog)}}>{this.props.dog}</Link>
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

