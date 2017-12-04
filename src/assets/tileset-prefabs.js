import { TilesetPositions } from './tileset-position-mappings'

const DEFAULT_PREFABS = {
  NOTHING: {
    tileset: 'nothing',
    tilePosition: 'topLeft'
  }
}

const GRASS_PREFABS = Object.keys(TilesetPositions).reduce((prev, position) => {
  const snakedName = position.replace(/([A-Z])/g, (m, p1) => `_${p1}`)
  const pascaledName = snakedName.toUpperCase()

  prev[pascaledName] = {
    tileset: 'grassToRock',
    tilePosition: position
  }

  return prev
}, {})

const TREE1_PREFABS = {
  TREE_TOP_LEFT: { tileset: 'tree1', tilePosition: 'topLeft' },
  TREE_TOP_RIGHT: { tileset: 'tree1', tilePosition: 'topCenter' },
  TREE_MID_LEFT: { tileset: 'tree1', tilePosition: 'middleLeft' },
  TREE_MID_RIGHT: { tileset: 'tree1', tilePosition: 'center' },
  TREE_BASE_LEFT: { tileset: 'tree1', tilePosition: 'bottomLeft' },
  TREE_BASE_RIGHT: { tileset: 'tree1', tilePosition: 'bottomCenter' },
}

const PREFABS = {
  ...DEFAULT_PREFABS,
  ...GRASS_PREFABS,
  ...TREE1_PREFABS
}

export { PREFABS }
