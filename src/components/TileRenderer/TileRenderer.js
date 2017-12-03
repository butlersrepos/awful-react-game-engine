import React from 'react'
import { Mapping } from 'src/assets/tileset-mapping'
import { TilesetPositions } from 'src/assets//tileset-position-mappings'

const tileWidth = 40;
const tileHeight = 40;

const TileRenderer = ({ tile }) => {
  const terrainSheet = Mapping[tile.tileset]
  const [row, col] = TilesetPositions[tile.tilePosition]

  return (
    <span style={{
      background: `url(${terrainSheet})`,
      height: `${tileHeight}px`,
      width: `${tileWidth}px`,
      display: 'inline-block',
      backgroundPositionX: `-${col * (tileWidth + 1)}px`,
      backgroundPositionY: `-${row * (tileHeight + 1)}px`
    }}>
    </span>
  )
}

export { TileRenderer }