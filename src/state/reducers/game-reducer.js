const initialState = {
  worldWidth: 20,
  worldHeight: 15,
  tileScale: 32,
  playerX: 0,
  playerY: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
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
