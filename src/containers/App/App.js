import React, { Component } from 'react'
import PlayerSprite from 'src/containers/PlayerSprite'
import Terrain from 'src/components/Terrain'
import KeyboardListener from '../KeyboardListener'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Terrain />
        <PlayerSprite />
        <KeyboardListener />
      </div>
    )
  }
}

export default App
