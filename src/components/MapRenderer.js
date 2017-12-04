import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TileRenderer } from './TileRenderer'
import PlayerSprite from 'src/containers/PlayerSprite'
import PastPlayerSprite from 'src/containers/PastPlayerSprite'

const mapStyles = {
  mapRow: top => ({
    display: 'flex',
    position: 'absolute',
    top: `${top}px`
  }),
  terrainLayer: {
    zIndex: 1
  },
  objectLayer: {
    zIndex: 2
  }
}

const mapStateToProps = state => ({
  terrain: state.game.terrainLayer,
  objectLayer: state.game.objectLayer,
  showGhost: !window.rewindCooldown && state.controls.T_DOWN
})

export const MapRenderer = connect(mapStateToProps)(
  class Map extends Component {
    render () {
      const { terrain, objectLayer, showGhost } = this.props

      return <div style={mapStyles.terrainLayer}>
        {terrain.map((rows, rowIndex) => {
          return <div
            style={mapStyles.mapRow(rowIndex * 40)}
            key={rowIndex}>
            {rows.map((tile, colIndex) => <TileRenderer key={`${rowIndex},${colIndex}`} tile={tile} />)}
          </div>
        })}

        {showGhost && <PastPlayerSprite />}
        <PlayerSprite />

        {
          objectLayer.map((rows, rowIndex) => {
            return <div
              style={mapStyles.mapRow(rowIndex * 40)}
              key={rowIndex}>
              {rows.map((tile, colIndex) => <TileRenderer key={`${rowIndex},${colIndex}`} tile={tile} />)}
            </div>
          })
        }
      </div>
    }
  }
)

