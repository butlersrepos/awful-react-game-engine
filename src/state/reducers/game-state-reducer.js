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
        playerX: state.playerX + 1,
        playerDirection: 'right'
      }
    case 'MOVE_LEFT':
      return { 
        ...state, 
        playerX: state.playerX - 1,
        playerDirection: 'left'
      }
    case 'MOVE_DOWN':
      return { 
        ...state, 
        playerY: state.playerY + 1,
        playerDirection: 'down'
      }
    case 'MOVE_UP':
      return { 
        ...state, 
        playerY: state.playerY - 1,
        playerDirection: 'up'
      }
    default:
      return state
  }
}
