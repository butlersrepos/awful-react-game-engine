import { TilesetPositions } from './tileset-position-mappings'

const PREFABS = Object.keys(TilesetPositions).reduce((prev, position) => {
  const snakedName = position.replace(/([A-Z])/g, (m, p1) => `_${p1}`)
  const pascaledName = snakedName.toUpperCase()

  prev[pascaledName] = {
    tileset: 'grassToRock',
    tilePosition: position
  }

  return prev
}, {})

export { PREFABS }
