// @flow
import type { InitialStateShape, ActionShape } from '../../types'

const initialState = {
  worldWidth: 20,
  worldHeight: 15,
  tileScale: 32,
  playerDirection: 'right',
  playerX: 0,
  playerY: 0
}

export default (state: InitialStateShape = initialState, action: ActionShape) => {
  switch (action.type) {
    case 'FACING_UP':
      return Object.assign({}, state, { playerDirection: 'up' })
    case 'FACING_DOWN':
      return Object.assign({}, state, { playerDirection: 'down' })
    case 'FACING_LEFT':
      return Object.assign({}, state, { playerDirection: 'left' })
    case 'FACING_RIGHT':
      return Object.assign({}, state, { playerDirection: 'right' })
    case 'MOVE_RIGHT':
      return Object.assign({}, state, { playerX: state.playerX + 1 })
    case 'MOVE_LEFT':
      return Object.assign({}, state, { playerX: state.playerX - 1 })
    case 'MOVE_DOWN':
      return Object.assign({}, state, { playerY: state.playerY + 1 })
    case 'MOVE_UP':
      return Object.assign({}, state, { playerY: state.playerY - 1 })
    default:
      return state
  }
}
