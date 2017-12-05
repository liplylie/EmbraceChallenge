import React, { Component } from 'react';
import SideNav from './SideNav.js';
import { connect } from 'react-redux'
import ImageZoom from 'react-medium-image-zoom'

class DogView extends Component {
  constructor(props) {
    super(props);
     
     
  } 

  componentDidUpdate(){
    console.log(this.props, 'this props bro')
  }

   render() { 
    console.log(this.props.dogInfo.dogName, 'DogView props')
    let dogImageArray = [...this.props.dogInfo.imageUrls]
    console.log(dogImageArray, 'dogImageArray')
    if (dogImageArray.length === 0){
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
                  {dogImageArray.map((picture,i) =>{
                    return (
                      <div key={i}>
                        <ImageZoom
                          image={{
                            src:picture,
                            alt: `dog${i}`,
                            className: 'col',
                            style: {margin:"4em 4em 1em 4em", height: '10em', width: '10em'}
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

const mapStateToProps = (store) => {
  console.log(store, 'dog store')
  return {
    dogInfo: store.clickDog
  }
}

export default connect(mapStateToProps)(DogView)


                  