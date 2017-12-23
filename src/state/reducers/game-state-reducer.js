import { config } from 'src/game-config'
import { PREFABS } from 'src/assets//tileset-prefabs'
import { generate } from 'src/utils/map-generator';

const initialState = {
  worldWidth: 20,
  worldHeight: 15,
  tileScale: 32,
  playerX: 0,
  playerY: 0,
  playerDirection: 'down',
  recordedStates: [],
  rewindCooldown: false,
  terrainLayer: generate(22, 40),
  objectLayer: [
    [PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING],
    [PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING],
    [PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING],
    [PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING],
    [PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING, PREFABS.NOTHING],
  ]
}

const rewindLength = 3000
const recordInterval = 100
const maxRecordedFrames = rewindLength / recordInterval

export default (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_RIGHT':
      return {
        ...state,
        playerX: state.playerX + config.PLAYER_BASE_SPEED,
        playerDirection: 'right'
      }
    case 'MOVE_LEFT':
      return {
        ...state,
        playerX: state.playerX - config.PLAYER_BASE_SPEED,
        playerDirection: 'left'
      }
    case 'MOVE_DOWN':
      return {
        ...state,
        playerY: state.playerY + config.PLAYER_BASE_SPEED,
        playerDirection: 'down'
      }
    case 'MOVE_UP':
      return {
        ...state,
        playerY: state.playerY - config.PLAYER_BASE_SPEED,
        playerDirection: 'up'
      }
    case 'RECORD_STATE':
      const retainedStates = state.recordedStates.length === maxRecordedFrames
        ? state.recordedStates.slice(1)
        : state.recordedStates
      return {
        ...state,
        recordedStates: [...retainedStates, action.payload]
      }
    case 'RESTORE_STATE':
      if (state.rewindCooldown) { return state }

      return {
        ...state,
        ...state.recordedStates[0],
        rewindCooldown: true,
        recordedStates: []
      }
    case 'ENABLE_REWIND':
      return {
        ...state,
        rewindCooldown: false
      }
    default:
      return state
  }
}
