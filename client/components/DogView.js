import React, { Component } from 'react';
import SideNav from './SideNav.js';
import { connect } from 'react-redux'

class DogView extends Component {
  constructor(props) {
    super(props);
     console.log(props, 'DogView props')
     
  } 

  componentDidMount(){
  }

   render() { 
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
        <div style={{flex:10, maxHeight: '100vh', backgroundColor: 'lightpink',  overflow: "scroll"}}>
            <div className="row">
                <div className="col-md-4">
                  <p>{this.props.dogInfo.dogName}</p>
                </div>
                <div className="col-md-4">
                  {dogImageArray.map((image,i) =>{
                    return (
                      <div key={i}>
                        <img className="col" src={image} style={{marginBottom:".5em"}}/>
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
                <div className="col-md-4"></div>
            </div>
            <div className="row">
                <div className="col align-self-center text-center" style={{margin: '2em', backgroundColor: 'lightpink'}}>
                  <p> Dog Type </p>
                  
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