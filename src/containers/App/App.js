import React, { Component } from 'react'
import PlayerSprite from '../PlayerSprite'
import KeyboardListener from '../KeyboardListener'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <PlayerSprite />
        <KeyboardListener />
      </div>
    )
  }
}

export default App
