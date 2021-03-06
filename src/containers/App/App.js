import React, { Component } from 'react'
import KeyboardListener from '../KeyboardListener'
import { ScreenRenderer } from 'src/components/ScreenRenderer'
import './App.css'
import { TileRenderer } from 'src/components/TileRenderer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ScreenRenderer />
        <TileRenderer tile={{
          tileset: 'tree1',
          tilePosition: 'bottomCenter'
        }} />
        <KeyboardListener />
      </div>
    )
  }
}

export default App
