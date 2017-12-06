import React, { Component } from 'react';
import SideNav from './SideNav.js';
import { connect } from 'react-redux'
import ImageZoom from 'react-medium-image-zoom'
import $ from 'jquery'
import axios from 'axios'

const server = "http://localhost:3000"

class DogView extends Component {
  constructor(props) {
    super(props);
      this.state = {
        dogArray: []
      } 
    this.handleClick = this.handleClick.bind(this)
  } 

  componentWillMount(){
    this.state.dogArray = [...this.props.dogInfo.imageUrls]
    console.log(this.state.dogArray, 'componentWillMount')
  }

  componentDidMount(){
    this.state.dogArray = []
    console.log(this.state.dogArray, 'componentDidMount')
  }

  handleClick(i, dogName, picture){
    $(`#but${i}`).text("Added")
    axios.post(`${server}/api/addFavoriteDog`, {
      dogName: dogName,
      dogImage: picture,
    })
    .then(data => {
      console.log('add favorite dog successful')
    })
    .catch(err => {
      console.log('add favorite dog failed')
    })
  }



 render() {
  if (this.state.dogArray.length === 0){
    return (
      <div style={{flex:10, maxHeight: '100vh', marginTop: '3em', paddingTop: '3em', backgroundColor: 'lightpink',  overflow: "scroll"}}>
        <div className="loader"></div>
      </div>
      )
  } else {
      return (
        <div style={{flex:10, maxHeight: '100vh', backgroundColor: 'lightpink', overflow: "scroll"}}>
            <div className="row">
                <div className="col-md-12 text-center" style={{paddingTop: '8em'}} >
                 <div style={{fontSize: '4em'}}>{this.props.dogInfo.dogName}</div>
                 <div className="d-flex align-content-between flex-wrap" >
                  {this.state.dogArray.map((picture,i) =>{
                    return (
                      <div key={i}>
                        <ImageZoom
                          image={{
                            src:picture,
                            alt: `dog${i}`,
                            className: 'col',
                            style: {margin:"4em 4em 1em 4em", height: '10em', width: '10em', borderRadius: '3em',}
                          }}
                          zoomImage={{
                            src: picture,
                            alt: `dog${i}`
                          }}
                        />
                        <div className="col-md-12 text-center"> 
                          <a id={`but${i}`}className="btn btn-outline-dark" style={{marginBottom:".5em"}} onClick={()=>{this.handleClick(i, this.props.dogInfo.dogName, picture)}}>
                          Add to Favorites
                          </a>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
         </div>
      )
    }
  } 
}



export default DogView


                  