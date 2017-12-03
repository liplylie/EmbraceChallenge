import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './components/App.js'

class EmbraceChallenge extends Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <Provider store={store}>
        <App /> 
      </Provider> 
    )
  }
}

ReactDOM.render(<EmbraceChallenge/>, document.getElementById('app')) 