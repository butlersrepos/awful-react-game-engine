import React from 'react'
import terrainSheet from 'src/assets/grass-to-rock.png'

const Terrain = ({ src, row, col }) => (
  <div style={{
    background: `url(${terrainSheet})`,
    height: '128px',
    width: '128px'
  }}>
  </div>
)

export { Terrain }