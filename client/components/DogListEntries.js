import React, { Component } from 'react'

class DogListEntries extends Component{
	constructor(props){
		super(props)
		console.log(props, 'dog list props')
	}

	render(){
		return (
			<div>
				<a> {this.props.dog} </a>
			</div>
		)
	}
}

export default DogListEntries