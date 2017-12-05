import React, { Component } from 'react';
import SideNav from './SideNav.js';
import { connect } from 'react-redux'
import ImageZoom from 'react-medium-image-zoom'

class DogView extends Component {
  constructor(props) {
    super(props);
     this.state = {
        dogArray: []
     } 
  } 

  componentWillMount(){
    this.state.dogArray = [...this.props.dogInfo.imageUrls]
    console.log(this.state.dogArray, 'componentWillMount')
  }

  componentDidMount(){
    this.state.dogArray = []
    console.log(this.state.dogArray, 'componentDidMount')
  }

   render() {
    if (this.state.dogArray.length === 0){
      return (
        <div style={{flex:10, maxHeight: '100vh', marginTop: '3em', backgroundColor: 'lightpink',  overflow: "scroll"}}>
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
                          <button type="button" className="btn btn-outline-dark" style={{marginBottom:".5em"}} >
                          Add to Favorites
                          </button>
                        </div>
                      </div>
                    )
                  })
                  }
                </div>
                </div>
            </div>
      </div>
    )
  }
}
}



export default DogView


                  