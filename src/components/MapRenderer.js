import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TileRenderer } from './TileRenderer'
import PlayerSprite from 'src/containers/PlayerSprite'

const mapStyles = {
  mapRow: top => ({
    display: 'flex',
    position: 'absolute',
    top: `${top}px`
  }),
  terrainLayer: {
    'z-index': 1
  },
  objectLayer: {
    'z-index': 2
  }
}

const mapStateToProps = state => ({
  terrain: state.game.terrainLayer,
  objectLayer: state.game.objectLayer
})

export const MapRenderer = connect(mapStateToProps)(
  class Map extends Component {
    render() {
      const { terrain, objectLayer } = this.props

      return <div style={mapStyles.terrainLayer}>
        {terrain.map((rows, rowIndex) => {
          return <div style={mapStyles.mapRow(rowIndex * 40)} key={rowIndex}>{rows.map((tile, colIndex) => <TileRenderer key={`${rowIndex},${colIndex}`} tile={tile} />)}</div>
        })}
        <PlayerSprite />
      </div>
    }
  }
)

