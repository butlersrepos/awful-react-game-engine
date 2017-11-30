import { config } from 'src//game-config'

const initialState = {
  worldWidth: 20,
  worldHeight: 15,
  tileScale: 32,
  playerX: 0,
  playerY: 0,
  playerDirection: 'down'
}

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
    default:
      return state
  }
}
