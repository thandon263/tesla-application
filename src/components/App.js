import React, { Component } from 'react'
import '../css/App.css'
import Header from './Header'
import TeslaBattery from '../container/TeslaBattery'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TeslaBattery />
      </div>
    );
  }
}
export default App;
